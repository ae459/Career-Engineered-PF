from datetime import datetime
from models import db

class Metric(db.Model):
    """System metrics model: captures CPU, memory, disk, network at intervals"""
    __tablename__ = 'metrics'
    
    id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime, nullable=False, default=datetime.utcnow, index=True)
    cpu_usage = db.Column(db.Numeric(5, 2), nullable=False)
    memory_usage = db.Column(db.Numeric(5, 2), nullable=False)
    disk_usage = db.Column(db.Numeric(5, 2), nullable=False)
    network_in = db.Column(db.BigInteger, default=0)
    network_out = db.Column(db.BigInteger, default=0)
    
    def to_dict(self):
        """Convert model to JSON-serializable dict"""
        return {
            'id': self.id,
            'timestamp': self.timestamp.isoformat(),
            'cpu_usage': float(self.cpu_usage),
            'memory_usage': float(self.memory_usage),
            'disk_usage': float(self.disk_usage),
            'network_in': self.network_in,
            'network_out': self.network_out,
        }
    
    def __repr__(self):
        return f"<Metric {self.timestamp}: CPU={self.cpu_usage}% MEM={self.memory_usage}%>"


class ContactSubmission(db.Model):
    """Lead-gen contact form submissions"""
    __tablename__ = 'contact_submissions'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False, index=True)
    linkedin_url = db.Column(db.String(255))
    visit_reason = db.Column(db.String(100))
    interest_type = db.Column(db.String(100))
    submitted_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow, index=True)
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'linkedin_url': self.linkedin_url,
            'visit_reason': self.visit_reason,
            'interest_type': self.interest_type,
            'submitted_at': self.submitted_at.isoformat(),
        }
    
    def __repr__(self):
        return f"<ContactSubmission {self.name} ({self.email})>"


class Alert(db.Model):
    """System alerts: triggered when metrics exceed thresholds"""
    __tablename__ = 'alerts'
    
    id = db.Column(db.Integer, primary_key=True)
    alert_type = db.Column(db.String(100), nullable=False, index=True)
    threshold = db.Column(db.Numeric(5, 2), nullable=False)
    current_value = db.Column(db.Numeric(5, 2), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow, index=True)
    resolved_at = db.Column(db.DateTime)
    
    def to_dict(self):
        return {
            'id': self.id,
            'alert_type': self.alert_type,
            'threshold': float(self.threshold),
            'current_value': float(self.current_value),
            'created_at': self.created_at.isoformat(),
            'resolved_at': self.resolved_at.isoformat() if self.resolved_at else None,
        }
    
    def __repr__(self):
        return f"<Alert {self.alert_type} {self.current_value}/{self.threshold}>"
