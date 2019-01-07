import click


@click.group()
def cli():
    pass

@cli.command()
@click.option('--host', '-h', default='127.0.0.1')
@click.option('--port', '-p', default='7070')
def start(host, port):
    print(host, port)

