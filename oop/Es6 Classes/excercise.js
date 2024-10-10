const _items = new WeakMap();
class Stack {
     constructor(){
        _items.set(this, []);
     }

     push(item){
        _items.set(this).push(item);
     }
     pop(){
        const items = _items.get(this);
        if(items.length === 0) throw new Error('Stack is empty');
        return items.pop();
     }
     peak() {
        const items = _items.get(this);
        if(items.length === 0) throw new Error('Stack is empty');
        return items[items.length - 1];
     }
     get count(){
        return _items.get(this).length;
     }
}