var vm = new Vue({
  el: "#app",
  data: {
    gather: true,
    state: "Press the cards to start a game",
    symbols: [
      { label: "spades", image: "./png/green.png", symbol: "" },
      { label: "hearts", image: "./png/orange.png", symbol: "" },
      { label: "diamonds", image: "./png/red.png", symbol: "" },
      { label: "777", image: "./png/full_red.png", symbol: "" },
    ],
    cards: [
      {
        id: 1,
        label: "spades",
        open: true,
      },
      {
        id: 2,
        label: "hearts",
        open: false,
      },
      {
        id: 3,
        label: "777",
        open: false,
      },
      {
        id: 4,
        label: "diamonds",
        open: false,
      },
    ],
    question: null,
    mode: "",
    count: 0,
    pickOutState: false,
    
  },
  methods: {
    
    getSymbolImage(label) {
      const symbol = this.symbols.find((s) => s.label === label);
      return symbol ? symbol.image : "";
    },
    shuffle() {
      
      let newOrder;
        newOrder = [1, 2, 3, 4].sort(() => Math.random() - 0.5);
        console.log("ordinea noua e:", newOrder);
        this.cards.forEach((card, cid) => (card.id = newOrder[cid]));
      
    },
    turnAll(state) {
      this.cards.forEach((card) => (card.open = state));
    },
    startGame() {
      const imagePath = "./png/asset.png";
      this.mode = "";
      this.question = this.symbols.find((symbol) => symbol.label === "777");
      // this.question = this.symbols[parseInt(Math.random()*4)]
      this.turnAll(false);
      this.gather = true;
      this.state = "lets play...";
      setTimeout(() => {
        this.gather = false;
        this.state =
        `Your mission is to follow the <img src="${imagePath}" alt="777"> card!`
          console.log(imagePath, "img");
          this.state = "lets play...";
      }, 1000);
      setTimeout(() => {
        this.turnAll(true);

          console.log(imagePath, "img");
          this.state =
            `Your mission is to follow the <img src="${imagePath}" alt="777"> card!` 
      }, 2000);
      setTimeout(() => {
        this.turnAll(false);
        this.state = "Get ready... ";
      }, 4000);
      this.count = 0;
      setTimeout(() => {
        this.pickOutState = false;
        let startShuffle = () => {
          this.shuffle();
          console.log("Shuffle! " + this.count);
          if (this.count++ < 6) {
            setTimeout(startShuffle, 300);
          } else {
           
              // const imagePath = "./png/asset.png";
              console.log(imagePath, "img");
              this.state =
                `Please pick out <img src="${imagePath}" alt="777"> card!`
              // this.state="Your mission is  follow the " + this.question.label + "card" + "!"
       
            // this.state =
            //   "Please pick out " + this.question.label + this.question.symbol;
            this.mode = "Answer";
            this.pickOutState = true;
          }
        };
        startShuffle();
      }, 6000);
    },
    getSymbol(label) {
      let result = this.symbols.find((s) => s.label == label);
      return result ? result.symbol : label;
    },
    getCard(label) {
      return this.cards.find((card) => card.label == label);
    },
    openCard(card) {
      this.pickOutState = false;
      if (this.mode == "Answer") {
        card.open = !card.open;
        if (card.label == this.question.label) {
          if (this.question.label === "777") {
            const imagePath = "./png/asset.png";
            console.log(imagePath, "img");
            this.state =
              `congrats!! you found the <img src="${imagePath}" alt="777"> card!`
            // this.state="Your mission is  follow the " + this.question.label + "card" + "!"
          }
        } else {
          this.state = "You lose !!!";
          setTimeout(() => {
            let card = this.getCard(this.question.label);
            card.open = true;
          }, 1000);
        }
        setTimeout(() => {
          this.startGame();
        }, 3000);
      } else {
        this.startGame();
      }
    },
  },
  mounted() {
    this.startGame();
  },
});
