var bancoDePalavras = ['teste','terra','certo', 'array', 'tesre', 'arroz']
  var gridX = 5 // numero de linhas na horizontal
  var gridY = 6 // numero de linhas na vertical
  var wordle = bancoDePalavras[getRandomInt(0, bancoDePalavras.length)]
  var keyboardLayoutRow1 = "qwertyuiop" //teclado linha  01
  var keyboardLayoutRow2 = "asdfghjkl" // teclado  linha 02
  var keyboardLayoutRow3 = "zxcvbnm" // teclado linha 03

        function getRandomInt(min, max) { // função random
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function checkResponse() { // função verificar
            let word = ''// variavel palavra
            for (let i = 0; i < focusCol; i++) {
                word += document.getElementById(getPosByRowCol('ip', focusRow, i)).value.toLowerCase()
            }
            if (word.length < 5) { // se
                alert('Comprimento da palavra muito curto') // frase
            } else { // se não
                if (bancoDePalavras.indexOf(word) === -1) {
                    console.log(word) // console palavra
                    alert('A palavra não existe') // frase
                    moveFocus(focusRow, focusCol - 1)
                } else { // se não
                    if (word === wordle) { // se
                        checkLetterPositions(wordle, word)
                        setTimeout(() => { // Tempo
                            alert('Você ganhou! A palavra era: ' + wordle) // frase
                            document.getElementById('score').textContent = parseInt(document.getElementById('score')
                            .textContent) + 1
                            resetBoard() // chamando função
                        }, 100)
                    } else { // se não
                        checkLetterPositions(wordle, word)
                        if (focusRow + 1 >= gridY) { // se
                            alert('Palavra era: ' + wordle)
                            window.location.reload()
                        }
                        moveFocus(++focusRow, 0)
                        focusCol = 0
                    }
                }
            }
        }

        function counter(word) { // Função Contar
            var palavraDigitada = {}
            word.split('').forEach(letter => {
                if (letter in palavraDigitada) { // se
                    palavraDigitada[letter] += 1
                } else { // se não
                    palavraDigitada[letter] = 1
                }
            })
            return palavraDigitada
        }

        function checkLetterPositions(word1, word2) { // Função
            let palavraDigitada = counter(word1)
            let word2Array = word2.split('')
            for (let i = 0; i < gridX; i++) {
                if (word1[i] === word2[i]) {
                    palavraDigitada[word1[i]] -= 1
                    word2Array[i] = 1
                    document.getElementById(getPosByRowCol('td', focusRow, i)).style.backgroundColor = '#04D361' // verde
                    document.getElementById(getPosByRowCol('td', focusRow, i)).style.boxShadow = 'inset 0 0 0 2px #1B873F'
                    document.getElementById(getPosByRowCol('td', focusRow, i)).style.border = '1px solid #1B873F'
                    document.getElementById('key-' + word2[i]).style.backgroundColor = '#04D361'

                }
            }
            for (let i = 0; i < gridX; i++) {
                if(word2Array[i] !== 1){ // se
                    if (palavraDigitada[word2Array[i]] > 0 ){ //se
                        palavraDigitada[word2[i]] -= 1
                        document.getElementById(getPosByRowCol('td', focusRow, i)).style.backgroundColor = '#FBA94C' // amarelo
                        document.getElementById(getPosByRowCol('td', focusRow, i)).style.boxShadow = 'inset 0 0 0 2px #EB8A1D'
                        document.getElementById(getPosByRowCol('td', focusRow, i)).style.border = '1px solid #EB8A1D'
                        document.getElementById('key-' + word2[i]).style.backgroundColor = '#FBA94C'
                    } else { // se não
                        document.getElementById(getPosByRowCol('td', focusRow, i)).style.backgroundColor = '#505059'
                        document.getElementById(getPosByRowCol('td', focusRow, i)).style.boxShadow = 'inset 0 0 0 2px #7C7C8A'
                        document.getElementById(getPosByRowCol('td', focusRow, i)).style.border = '1px solid #7C7C8A'
                        document.getElementById('key-' + word2[i]).style.backgroundColor = '#505059'
                    }
                }
            }
        }

        function getPosByRowCol(str, row, col) {// Função
            return `${str}-${row}-${col}`
        }

        function createWordleGrid() { // Função
            for (let i = 0; i < gridY; i++) {
                let tr = document.createElement('tr')
                tr.setAttribute('id', 'tr-' + i)
                for (let j = 0; j < gridX; j++) {
                    let td = document.createElement('td')
                    let ip = document.createElement('input')
                    ip.setAttribute('class', 'letterInput')
                    ip.setAttribute('onkeydown', 'changeInputCollector(event,this)')
                    ip.setAttribute('maxLength', 1)
                    ip.setAttribute('inputmode', 'none')
                    ip.setAttribute('id', getPosByRowCol('ip', i, j))
                    td.setAttribute('id', getPosByRowCol('td', i, j))
                    td.appendChild(ip)
                    tr.appendChild(td)
                }
                document.getElementById('wordleTable').appendChild(tr)
            }
            document.getElementById(getPosByRowCol('ip', focusRow, focusCol)).focus()
        }

        function moveFocus(row, col) {
            try { document.getElementById(getPosByRowCol('ip', row, col)).focus() } catch (e) {}
        }

        function changeInputCollector(e, obj) { //Função teclado
            if (e.type === 'click') { // se
                if (focusCol !== gridX) { // se
                    document.getElementById(getPosByRowCol('ip', focusRow, focusCol)).value = obj.textContent
                    moveFocus(focusRow, focusCol)
                    focusCol++
                }
            } else { // se não
                if (e.keyCode >= 65 && e.keyCode <= 91) { // if
                    if (focusCol !== gridX) { // se
                        moveFocus(focusRow, focusCol)
                        focusCol++
                    }
                }
            }
            if (e.keyCode === 8) { // se
                backspace(true)
            }

        }

        function backspace(keypress) {// Função
            if (focusCol - 1 >= 0) {// se
                if (!keypress) { // se 
                    document.getElementById(getPosByRowCol('ip', focusRow, focusCol - 1)).value = ''
                }
                moveFocus(focusRow, focusCol - 1)
                focusCol--
            }
        }

        function createKeyboardLayout() {// função
            keyboardLayoutRow1.split('').forEach(key => {
                var p = document.createElement('p')
                p.setAttribute('id', 'key-' + key)
                p.addEventListener('click', function (e) { changeInputCollector(e, this) })
                p.textContent = key.toUpperCase()
                document.getElementById('keyboardLayoutRow1').appendChild(p)
            })
            keyboardLayoutRow2.split('').forEach(key => {
                var p = document.createElement('p')
                p.setAttribute('id', 'key-' + key)
                p.addEventListener('click', function (e) { changeInputCollector(e, this) })
                p.textContent = key.toUpperCase()
                document.getElementById('keyboardLayoutRow2').appendChild(p)
            })
            keyboardLayoutRow3.split('').forEach(key => {
                var p = document.createElement('p')
                p.setAttribute('id', 'key-' + key)
                p.addEventListener('click', function (e) { changeInputCollector(e, this) })
                p.textContent = key.toUpperCase()
                document.getElementById('keyboardLayoutRow3').appendChild(p)
            })
        }

        window.addEventListener('keydown', (event) => {
            if (event.keyCode === 13) {
                checkResponse()
            }
        })

        function Trocar(id){ // Função
            let node = document.getElementById(id)
            while(node.firstChild){
                node.firstChild.remove()
            }
        }

        function resetBoard() { // função resetar
            focusRow = 0
            focusCol = 0
            wordle = bancoDePalavras[getRandomInt(0, bancoDePalavras.length)]
            Trocar('wordleTable')
            Trocar('keyboardLayoutRow1')
            Trocar('keyboardLayoutRow2')
            Trocar('keyboardLayoutRow3')
            createWordleGrid()
            createKeyboardLayout()
        }
        resetBoard() // usando função resetar
        document.body.addEventListener('click',(e) => {
            moveFocus(focusRow,focusCol-1)
            e.stopPropagation()
        },)
