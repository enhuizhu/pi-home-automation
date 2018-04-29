#!/usr/bin/env python
import pika

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()
channel.queue_declare(queue='led')
channel.basic_publish(exchange='', routing_key='led', body="0")
print("[x] Sent 'turn off led'")
connection.close()
