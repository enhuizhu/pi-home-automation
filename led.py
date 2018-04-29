import RPi.GPIO as GPIO
import time
from queueService import QueueService

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(18, GPIO.OUT)

def callback(ch, method, properties, body):
    print(' [x] recieved %r' % body)
    if body == "1":
        print('turn led')
        GPIO.output(18, GPIO.HIGH)
    elif body == "0":
        print('turn off led')
        GPIO.output(18, GPIO.LOW)


QueueService.sub(callback)

#print "LED on"
#GPIO.output(18, GPIO.HIGH)
