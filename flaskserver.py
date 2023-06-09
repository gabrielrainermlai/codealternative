from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/contato', methods=['POST'])
def enviar_contato():
    nome = request.form['nome']
    email = request.form['email']
    mensagem = request.form['mensagem']

    # Lógica para processar o formulário de contato
    # Você pode adicionar sua lógica de envio de e-mail, armazenamento de dados, etc.

    return 'Mensagem enviada com sucesso! Em breve entraremos em contato.'

if __name__ == '__main__':
    app.run(debug=True)
