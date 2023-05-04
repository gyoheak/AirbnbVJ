export default class Component {
  $target;
  state;
  constructor($target){
    this.$target = $target;
    this.setup();
    this.render();
  }
  setup(){};
  template() {return '';}
  render(){
    this.$target.innerHTML = this.template();
    this.setEvent();
  }
  setEvent();
  setState(newState){
    this.state = {...this.state, newState};
    this.render();
  }
  
  addEvnet(eventType, selector, callback){
    const children = [...this.$target.querySElectorAll(selector)];
    this.$target.addEventListener(eventType, event => {
      if(!event.target.closest(selector)) return false;
      callback(event);
    })
  }
}