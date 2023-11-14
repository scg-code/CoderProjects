from flask import Flask, request

app = Flask(__name__)

# API
@app.route('/')
def index():
    return '<h3>Hello, World!</h3>'

@app.route('/spam')
def spam():
    person = { 'name': 'John', 'age': 21 }
    return person

@app.route('/hello/<name>')
def hello(name):
    # name =request.args.get('name')
    # name = 'Jack'
    return { 'message': f'Hello, {name}!' }

@app.route('/add/<int:num1>/<int:num2>')
def add(num1, num2):
        return { 'result': num1 + num2 }
    

app.errorhandler(TypeError)
def type_error(error):
    return { 'error': str(error) }, 400

@app.errorhandler(404)
def not_found(error):
    return { 'error': str(error) }, 404


if __name__ == '__main__':
    app.run(debug=True)