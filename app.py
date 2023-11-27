from flask import Flask, request
from flask_cors import CORS
from utils import load_flashcards
import json

app = Flask(__name__)
cors = CORS(app, supports_credentials=True)

@app.route('/get_flashcards', methods=['POST'])
def get_flashcards():
    unit = request.json['unit']
    flashcards = load_flashcards('./flask-app/flashcards.csv')
    results = []
    for entry in flashcards[unit]:
        results.append({'question': entry[0], 'answer': entry[1]})
    res = json.dumps({'results': results})
    print(res)
    return res

@app.route('/get_units')
def get_units():
    units = ['Unit 1', 'Unit 2']
    response = []
    count = 1
    for u in units:
        response.append({'id': count, 'name': u})
        count += 1
    res = json.dumps({'units': response})
    return res


if __name__ == '__main__':
    app.run(debug=True)