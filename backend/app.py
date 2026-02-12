from flask import Flask
from flask_cors import CORS
from flask_socketio import SocketIO
import os
from dotenv import load_dotenv
from models import db
from routes import register_routes

load_dotenv()

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv(
    'DATABASE_URL', 
    'mysql+pymysql://root:@localhost/infrastructure_monitor'
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize database
db.init_app(app)

# Register routes
register_routes(app)

@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return {'status': 'ok'}, 200

@socketio.on('connect')
def handle_connect():
    """WebSocket: client connected"""
    print('Client connected')
    socketio.emit('response', {'data': 'Connected to server'})

@socketio.on('disconnect')
def handle_disconnect():
    """WebSocket: client disconnected"""
    print('Client disconnected')

@socketio.on('request_metrics')
def handle_metrics_request():
    """WebSocket: send current metrics"""
    from models.metrics import Metric
    latest = Metric.query.order_by(Metric.timestamp.desc()).first()
    if latest:
        socketio.emit('metrics_update', latest.to_dict())

# Create tables on startup
with app.app_context():
    db.create_all()

if __name__ == '__main__':
    socketio.run(app, debug=True, host='0.0.0.0', port=5000)
