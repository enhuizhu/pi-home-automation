import pika
#
QUEUE = 'led'
connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()
channel.queue_declare(queue=QUEUE)

class QueueService:#
    @staticmethod
    def sub(callback):
        channel.basic_consume(callback, queue=QUEUE, no_ack=True)
        print(' [*] Waiting for messages')
        channel.start_consuming()
