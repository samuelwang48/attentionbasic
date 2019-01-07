from flask import Flask, render_template
from flask_socketio import SocketIO


def start(host=None, port=7777):
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'secret!'
    socketio = SocketIO(app)
    
    socketio.run(app, host, port, debug=True)
