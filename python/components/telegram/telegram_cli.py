import click
import json

from telethon.tl.types import PeerUser, PeerChat, PeerChannel
from telethon.sync import TelegramClient
from telethon import functions, types


api_id = 618043
api_hash = 'f57156f6d242ca6454103f1c8ef3bb30'

@click.group()
def cli():
    pass

@cli.command()
def list_channels():
    with TelegramClient('session_name', api_id, api_hash) as client:
        # me = client.get_me()
        # print(me.stringify())
    
        dialogs = client.get_dialogs()
        for d in dialogs:
           if 'AttentionBasic' in d.name:
               print(d.name, d.entity.id)
           else:
               print(d.name, d.entity.id)

@cli.command()
def send(cid=1326330519, msg='[admin]hi there!'):
    with TelegramClient('session_name', api_id, api_hash) as client:
        client.send_message(PeerChannel(cid), msg)

@cli.command()
def receive(cid=1326330519):
    ids = []
    with TelegramClient('session_name', api_id, api_hash) as client:
        result = client(functions.channels.GetMessagesRequest(
            channel=cid,
            id=[1]
        ))
        for i in range(1, result.pts):
          ids.append(i)

        result = client(functions.channels.GetMessagesRequest(
            channel=cid,
            id=ids
        ))

        for m in result.messages:
            if isinstance(m, types.Message):
                print(m.message)
