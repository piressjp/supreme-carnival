let currentIndex = 0;
const contents = [
    {
        title: "Conteúdo 1: Introdução ao paradigma de orientação a objetos.",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut et officiis, magnam aliquid maiores hic. Distinctio, cumque. Quidem exercitationem culpa voluptates, quod sed repudiandae aliquid natus, quae ea ullam quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nemo. Similique nisi ab illum numquam aut architecto beatae doloribus error id assumenda odio saepe maxime, cum quam temporibus sequi voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore esse veritatis quisquam odio perferendis ipsa. Rem saepe laboriosam fugit et distinctio, veritatis vel aperiam animi at, laborum ad consectetur sunt."
    }
    ,
    {
        title: "Conteúdo 2: Princípios básicos do paradigma.",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut et officiis, magnam aliquid maiores hic. Distinctio, cumque. Quidem exercitationem culpa voluptates, quod sed repudiandae aliquid natus, quae ea ullam quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nemo. Similique nisi ab illum numquam aut architecto beatae doloribus error id assumenda odio saepe maxime, cum quam temporibus sequi voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore esse veritatis quisquam odio perferendis ipsa. Rem saepe laboriosam fugit et distinctio, veritatis vel aperiam animi at, laborum ad consectetur sunt."
    }
    ,
    {
        title: "Conteúdo 3: Classes e Objetos.",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut et officiis, magnam aliquid maiores hic. Distinctio, cumque. Quidem exercitationem culpa voluptates, quod sed repudiandae aliquid natus, quae ea ullam quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nemo. Similique nisi ab illum numquam aut architecto beatae doloribus error id assumenda odio saepe maxime, cum quam temporibus sequi voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore esse veritatis quisquam odio perferendis ipsa. Rem saepe laboriosam fugit et distinctio, veritatis vel aperiam animi at, laborum ad consectetur sunt."
    },
    {
        title: "Conteúdo 4: Herança e Polimorfismo.",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut et officiis, magnam aliquid maiores hic. Distinctio, cumque. Quidem exercitationem culpa voluptates, quod sed repudiandae aliquid natus, quae ea ullam quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nemo. Similique nisi ab illum numquam aut architecto beatae doloribus error id assumenda odio saepe maxime, cum quam temporibus sequi voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore esse veritatis quisquam odio perferendis ipsa. Rem saepe laboriosam fugit et distinctio, veritatis vel aperiam animi at, laborum ad consectetur sunt."
    }
];

function updateContent() {
    document.getElementById('title').innerText = contents[currentIndex].title;
    document.getElementById('content').innerText = contents[currentIndex].content;
}

function previousContent() {
    if (currentIndex > 0) {
        currentIndex--;
        updateContent();
    }
}

function nextContent() {
    if (currentIndex < contents.length - 1) {
        currentIndex++;
        updateContent();
    }
    }