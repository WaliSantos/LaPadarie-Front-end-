function startModal() {
    const modal = document.getElementById('modal')
    modal.classList.add('show');
    const buttonRemove = document.getElementById('button-cancel')
    buttonRemove.addEventListener('click', removeModal)
}

function removeModal() {
    const modal = document.getElementById('modal')
    modal.classList.remove('show');
}

const logo = document.querySelector('.logo');
logo.addEventListener('click', function() {
    startModal('modal');
})

const button = document.querySelector('.button-fila');
button.addEventListener('click', function() {
    startModal('modal');
})

class Record {
    constructor() {

        this.arrayRecord = [];

    }
    send() {
        let record = this.readData();

        if (this.validate(record)) {
            this.add(record);
        }

        this.addScreen();

        removeModal();




    }
    addScreen() {
        let cardContainer = document.getElementById('cardContainer');
        cardContainer.innerHTML = ``;


        this.arrayRecord.forEach(files => {
            console.log(files);

            cardContainer.innerHTML += `
            <div class="card-container" id="cardContainer">
            
            <div class="card">
                <div class="card-info">
                    <h3>${files.client}</h3>
                    <div class="info">
                        <h5>Total de Pães: <span>${files.amountBreads}</span></h5>
                        <h5>Total a pagar: <span>R$ 25,00</span> </h5>
                    </div>
                </div>
                <img id="delete"  onclick="record.delete(${files.id})" src="Imagens/lixeira.svg" alt="icon">
                
            </div>
        </div>
            
            
            `;




        });






    }

    add(record) {
        this.arrayRecord.push(record);


    }

    readData() {
        let record = {}

        record.id = this.arrayRecord.length;
        record.client = document.getElementById('client').value;
        record.amountBreads = document.getElementById('amountBreads').value;


        return record;
    }

    validate(record) {
        let msg = '';


        if (record.client == '') {
            msg += '-Informe o seu nome \n';
        }
        if (record.amountBreads == '') {
            msg += '-Informe a quantidade de pães \n';
        }
        if (msg != '') {
            alert(msg);
            return false
        }
        return true;
    }

    delete(id) {

        this.arrayRecord.splice(id, 1)
        for (let i = id; i < this.arrayRecord.length; i++) {
            this.arrayRecord[i].id--;

        }

        this.addScreen();
    }


}
var record = new Record();