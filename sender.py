# Requests is not a built in module 
# Use $ sudo pip install requests if you have pip installed
# On OSX you can also use sudo easy_install -U requests if you have easy_install installed.
# (ripped from http://stackoverflow.com/questions/17309288/importerror-no-module-named-requests)
# the same goes for simplejson
import requests 
import simplejson as json
import datetime

url = "http://localhost:3000/in-json"
data = {"base": "home",
  "timeRecorded": str(datetime.datetime.now()),
  "title": "Something1",
  "packet": {
    "rssi": 10,
    "moreData": "something else",
    "another thing": "wyld stallions rule"
  }
}
headers = {'Content-type': 'application/json'}
r = requests.post(url, data=json.dumps(data), headers=headers)

print ('r', r)
print ('r.status_code', r.status_code)
print ('r.headers["content-type"]', r.headers['content-type'])
print ('r.encoding', r.encoding)
print ('r.text', r.text)
#print ('r.json()', r.json())