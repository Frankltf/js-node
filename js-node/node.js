//链表类
function Node(element){
    this.element=element;
    this.next=null;
}
function LList(){
    this.head=new Node('head');
    this.find=find;
    this.insert=insert;
    this.remove=remove;
    this.display=display;
    this.findPre=findPre;
}
function find(item){
    var currNode=this.head;

    while (currNode.element!=item){
        currNode=currNode.next;
    }
    return currNode;
}
function findPre(item){
    var curNode=this.head;
    while (!(curNode.next==null) &&
    (curNode.next.element!=item)){
        curNode=curNode.next;
    }
    return curNode;
}
function remove(item){
    var preNode=this.findPre(item);
    if(preNode.next!=null){
        preNode.next=preNode.next.next
    }
}
function insert(newElement,item){
    var newNode=new Node(newElement);
    var current=this.find(item);
    newNode.next=current.next;
    current.next=newNode;
}
function display(){
    var current=this.head;
    var str=''
    while (current.next!=null){

        current=current.next;
        str+=current.element+"--->";
        console.log(str)
    }
}
var cities=new LList();
cities.insert('conway','head');
cities.insert('russellville','conway');
cities.insert('alma','russellville');
cities.insert('dddddd','alma');

cities.display();
//var d=cities.findPre('russellville');
cities.remove('alma');
