function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function sort(arr,arr2,arr3,func) {
  let result = [...arr];
  let result_name=[...arr2];
  let result_lastname=[...arr3];
  for (let j = 0; j < result.length; j++) {
      for (let i = 0; i < result.length-1; i++) {
        
        
        if(func(result[i],result[i+1])){
          let buff = result[i];
          result[i]=result[i+1];
          result[i+1]=buff;
          let buff_name=result_name[i];
          result_name[i]=result_name[i+1];
          result_name[i+1]=buff_name;
          buff_name=result_lastname[i];
          result_lastname[i]=result_lastname[i+1];
          result_lastname[i+1]=buff_name;
        }
      }   
    }  
    for (let i = 0; i < result.length-0; i++){
      document.getElementById('num'+i+'').innerHTML=result[i]
      document.getElementById(''+i+'').innerHTML=result_name[i]+'\xa0\xa0\xa0\xa0'+result_lastname[i]+'\xa0\xa0\xa0\xa0';
      // document.getElementById(''+i+'').innerHTML+=result_name[i]+'\xa0\xa0\xa0\xa0';
      // document.getElementById(''+i+'').innerHTML+=result_lastname[i]+'\xa0\xa0\xa0\xa0';
    }
    return result,result_name,result_lastname;
}
function selectChanged(value) {
    switch(value) {
        case 1:
          sort(arr,arr2,arr3,function(A, B) {
            return A<B;
          })
            break;
        case 2:
          sort(arr,arr2,arr3,function(A, B) {
            return A>B;
          })
        break
    }
}

let i = 0;
var responce = "";
var lastname_ = "";
var firstname_ = "";
var arr = [0,1,2,3,4,5,7];
var arr2=["","","","","","",""];
var arr3=["","","","","","",""];

fetch('https://fakestoreapi.com/users?limit=7')
            .then(res=>res.json())
            .then(razm =>{ responce = razm
              responce.forEach((user)=>{
                
                
                  user.grade=getRandomInt(1, 6);
                  
                  firstname_=JSON.stringify(user.name.firstname);
                  lastname_=JSON.stringify(user.name.lastname);
                  arr2[i]=firstname_.replace(/^"(.+)"$/,'$1')
                  arr3[i]=lastname_.replace(/^"(.+)"$/,'$1')

                  
                  arr[i]=user.grade;
                  
                i++;
                

              });  
            })
            sort(arr,arr2,arr3,function(A, B) {
              return A>B;
            })
            setTimeout(sort,1000,arr,arr2,arr3,function(A, B) {
              return A>B;
            })
            setTimeout(sort,1000,arr,arr2,arr3,function(A, B) {
              return A<B;
            })








/*let url = 'https://fakestoreapi.com/users?limit=7';

let paragraph = document.getElementById("paragraph");

let data = null;

fetch(url)
  .then((response) => response.text())
  .then((text) => {
    data = text;
    paragraph.innerText = data;
  })*/





  /*data.users.forEach(user => user.grade = randomInteger(1, 5)) {
    data.users.map(user => {
        return '<span>${user.grade}</span>'
        })  
    }*/



    /*const sendRequest = (url, method, data) => {
        return fetch(url)
    };

    function createPost(id, name, text) {
        let newPost = document.createElement("div");
        newPost.className = "post-item";
        newPost.id = id;

        let title = document.createElement("div");
        title.className = "post-title";
        title.id = name;

        let descr = document.createElement("div");
        descr.className = "post-text";
        descr.id = text;

        newPost.appendChild(title);
        newPost.appendChild(descr);

        document.getElementById("posts").appendChild(newPost);
    }*/

    /*sendRequest('https://fakestoreapi.com/users?limit=7', "GET")
        .then((data) => {
            return data.json();
        }
        )
        .then( response => {
            response.forEach((item) => createPost(item.id, item.title, item.body));
        })
        .catch(err => console.log(err));    */





