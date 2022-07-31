class Node{
    constructor(data, next=null){
        this.data=data ;
        this.next=next;
    }
}
class LinkLists{
    constructor(){
        this.head=null;
        this.size=0
    }

//Insert First postion
insertFirst(data){
    this.head = new Node(data,this.head);
    this.size++
}
//Last position
insertLast(data){
   let node =new Node (data)
   let current;
    
   //if empty,make head
   if(!this.head){
       this.head=node
   }else{
       current=this.head;
      while(current.next){
         current=current.next
      }
      current.next =node
   }
  this.size++
}

// Insert to node Given postion 
insertAt(data,index){
    if(index>0 && index>this.size){
        return;
    }
    //if first index
    if(index===0)
    {
        this.head=new Node(data,this.head)
       return
    }
       let node =new Node(data)
      let current,previous;

        //Set current to first
        current=this.head;
        let count=0;
       
        while(count<index){
            previous=current
            count++
            current=current.next;
        }
        node.next=current
        previous.next=node
        this.size++
    }



printLastData(){
    let current=this.head;
    while(current){
        console.log(current.data)
        current=current.next
    }
} }
const ll=new LinkLists()
ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertLast(400)
ll.insertAt(500,4)


ll.printLastData()