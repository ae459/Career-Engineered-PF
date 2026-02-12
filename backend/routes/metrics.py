from flask import Blueprint, jsonify, request
from datetime import datetime, timedelta
from models.metrics import Metric, ContactSubmission, Alert
from models import db
import psutil

metrics_bp = Blueprint('metrics', __name__, url_prefix='/api')

@metrics_bp.route('/metrics', methods=['GET'])
def get_current_metrics():
    """Get latest system metrics from database"""
    latest_metric = Metric.query.order_by(Metric.timestamp.desc()).first()
    
    if not latest_metric:
        return jsonify({'error': 'No metrics available'}), 404
    
    return jsonify(latest_metric.to_dict()), 200


@metrics_bp.route('/metrics/history', methods=['GET'])
def get_metrics_history():
    """Get historical metrics for the last N hours/days"""
    hours = request.args.get('hours', default=24, type=int)
    
    start_time = datetime.utcnow() - timedelta(hours=hours)
    metrics = Metric.query.filter(Metric.timestamp >= start_time).order_by(Metric.timestamp.asc()).all()
    
    if not metrics:
        return jsonify({'error': 'No historical data available'}), 404
    
    return jsonify([m.to_dict() for m in metrics]), 200


@metrics_bp.route('/metrics/collect', methods=['POST'])
def collect_metrics():
    """Manually collect and store current system metrics"""
    try:
        # Get system metrics using psutil
        cpu = psutil.cpu_percent(interval=1)
        memory = psutil.virtual_memory().percent
        disk = psutil.disk_usage('/').percent
        
        # Network stats (delta since last call - simplified)
        net = psutil.net_io_counters()
        network_in = net.bytes_recv
        network_out = net.bytes_sent
        
        # Create new metric record
        metric = Metric(
            cpu_usage=cpu,
            memory_usage=memory,
            disk_usage=disk,
            network_in=network_in,
            network_out=network_out,
        )
        
        db.session.add(metric)
        db.session.commit()
        
        return jsonify(metric.to_dict()), 201
    
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500


@metrics_bp.route('/contact', methods=['POST'])
def submit_contact():
    """Store contact form submission"""
    try:
        data = request.get_json()
        
        # Validate required fields
        if not data.get('name') or not data.get('email'):
            return jsonify({'error': 'Name and email required'}), 400
        
        submission = ContactSubmission(
            name=data['name'],
            email=data['email'],
            linkedin_url=data.get('linkedin_url'),
            visit_reason=data.get('visit_reason'),
            interest_type=data.get('interest_type'),
        )
        
        db.session.add(submission)
        db.session.commit()
        
        return jsonify({
            'message': 'Contact submission received',
            'id': submission.id
        }), 201
    
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500


@metrics_bp.route('/alerts', methods=['GET'])
def get_alerts():
    """Get all active alerts"""
    alerts = Alert.query.filter(Alert.resolved_at == None).order_by(Alert.created_at.desc()).all()
    return jsonify([a.to_dict() for a in alerts]), 200


@metrics_bp.route('/alerts', methods=['POST'])
def create_alert():
    """Create a new alert"""
    try:
        data = request.get_json()
        
        alert = Alert(
            alert_type=data['alert_type'],
            threshold=data['threshold'],
            current_value=data['current_value'],
        )
        
        db.session.add(alert)
        db.session.commit()
        
        return jsonify(alert.to_dict()), 201
    
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
