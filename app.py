from flask import Flask, render_template

app = Flask(__name__)
app.config['SECRET_KEY'] = 'Keeey'
app_name = 'myapp'


@app.route("/")
def homepage():
    return render_template('home.html')

@app.route('/article_home')
def article_homepage():
    return render_template('Articles/article_home.html')

@app.route('/syllabus')
def index_page():
    return render_template('syllabus.html')

@app.route("u1.1")
def u11_page():
    return render_template('u1.1.html')


if __name__ == '__main__':
    app.run(debug=True)