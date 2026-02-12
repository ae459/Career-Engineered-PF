from flask import Blueprint

def register_routes(app):
    """Register all route blueprints"""
    from routes.metrics import metrics_bp
    app.register_blueprint(metrics_bp)
