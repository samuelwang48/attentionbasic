import click

from components.ws import ws_controller as ws


@click.group()
def cli():
    pass

@cli.command()
@click.option('--host', '-h', default='127.0.0.1')
@click.option('--port', '-p', default='7777')
def start(host, port):
    ws.start(host, port)
