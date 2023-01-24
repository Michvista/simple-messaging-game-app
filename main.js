const container = document.getElementById('container');
const input = document.getElementById('text');
const friend_input = document.getElementById('friend_sText');
const btn = document.querySelector('.btn');
const friendbtn = document.querySelector('.friend_btn');

const header = document.querySelector('header');


//Msgs


let Name = prompt('What is your Name?');
const msgs = JSON.parse(localStorage.getItem('msgs') || '[]');
function showMsgs() {
  document.querySelectorAll('.sent').forEach(msg => msg.remove());
  msgs.forEach((msg, index) => {

//    if(index <= 0) {
//index++
  //  }
    if (Name.length == 0) {
      msg.Name = 'unknown User';
    }
   // let type = typeof(Name);
  //  if (type = null){
   //  alert('Error');
  //  }
  
  header.innerText = `Welcome ${msg.Name}`;
    let par = `<p class="sent">${msg.textmsg}  <button onclick='deletes(${index})' class='delete'> delete </button>  
       <span> ${msg.Name} </span>
       <span> ${index} message/s</span>
 </p>
    `
    ;
  //  console.log(index)
    container.insertAdjacentHTML('afterbegin', par)
  })
}
showMsgs();

input.addEventListener('focus', () => {
  msgs.forEach((msg) => {
    header.innerText = `Welcome ${msg.Name}`
  })
})


function deletes(msgId) {
  msgs.splice(msgId, 1);
  localStorage.setItem('msgs', JSON.stringify(msgs));
  showMsgs()
}
btn.addEventListener('click', () => {
  let value = input.value;
  if (input.value.length == 0) {
    alert('Pls type something');
  } else{
    //console.log(input.value.length)
    let msg = {
      textmsg: value,
      Name: Name
    }
    msgs.push(msg);
    localStorage.setItem('msgs', JSON.stringify(msgs));
  //  console.log(msgs)
   input.value = ''; 
   showMsgs();
  }
})


//friend_sText


  let FriendName = prompt('What is your Name Friend?');

const friendMsg = JSON.parse(localStorage.getItem('friendmsgs') || '[]');


function friendMsgs() {
  document.querySelectorAll('.received').forEach(friendmsg => friendmsg.remove());
  friendMsg.forEach((msg, index) => {
    if (FriendName.length == 0) {
      msg.FriendName = 'unknown Friend';
    }
  header.innerText = `Welcome ${msg.FriendName}`;
    let Friendpar = `<p class="received">${msg.friendtextmsg}  <button onclick='frienddeletes(${index})' class='delete'> delete </button>  
       <span> ${msg.FriendName} </span>
      <span> ${index} message/s </span>
 </p>
    `
    ;
 //   document.querySelectorAll('.sent').forEach(msgPar => msgPar.insertAdjacentHTML('afterbegin', Friendpar))
 container.insertAdjacentHTML('afterend', Friendpar)
  })
}
friendMsgs();

friend_input.addEventListener('focus', () => {
  friendMsg.forEach((msg) => {
    header.innerText = `Welcome ${msg.FriendName}`
  })
})

function frienddeletes(friendmsgId) {
  friendMsg.splice(friendmsgId, 1);
      localStorage.setItem('friendmsgs', JSON.stringify(friendMsg));
  friendMsgs()
}
friendbtn.addEventListener('click', () => {
  let friendMsgValue = friend_input.value;
  if (friend_input.value.length == 0) {
    alert('Pls type something');
  } else{
    //console.log(input.value.length)
let friend_msg = {
      friendtextmsg: friendMsgValue,
      FriendName: FriendName
    }
    friendMsg.push(friend_msg);
    localStorage.setItem('friendmsgs', JSON.stringify(friendMsg));
 //   console.log(msgs)
   friend_input.value = ''; 
   friendMsgs();
  }
})

alert('No r rated msgs')


//dark switch

const darkSwitch = document.querySelector('.dark');
darkSwitch.addEventListener('click', () => {
  const body = document.querySelector('body');
  body.classList.toggle('darkmode');
  const par = document.getElementById('content')
    const on = document.getElementById('change')
}
)
