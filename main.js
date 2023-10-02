//Body
let body = document.querySelector("body");
//siteMain
let siteMain = document.querySelector(".siteMain");
//Nav_Bar İtemlerinin Çekilimi
let admin = document.querySelector("#admin");
let level = document.querySelector("#level");
let banned = document.querySelector("#banned");
let female = document.querySelector("#female");
let male = document.querySelector("#male");
const data = [
    {playerName:"Aatrox",level: 65, admin:false,gender:"Male",banned:false,src:"./images/karakter2.gif"},
    {playerName:"Kaisa",level: 99, admin:true,gender:"Female",banned:false,src:"./images/karakter3.gif"},
    {playerName:"Lux",level: 75, admin:false,gender:"Female",banned:true,src:"./images/karakter10.gif"},
    {playerName:"Thresh",level: 62 , admin:false,gender:"Male",banned:false,src:"./images/karakter4.gif"},
    {playerName:"Pyke",level: 54 , admin:true,gender:"Male",banned:false,src:"./images/karakter7.gif"},
    {playerName:"Teemo",level: 76 , admin:false,gender:"Male",banned:false,src:"./images/karakter8.gif"},
    {playerName:"Darius",level: 16 , admin:false,gender:"Male",banned:false,src:"./images/karakter1.gif"},
    {playerName:"Vayne",level: 35 , admin:true,gender:"Female",banned:false,src:"./images/karakter5.gif"},
    {playerName:"Leona",level: 61 , admin:false,gender:"Female",banned:true,src:"./images/karakter9.gif"},
    {playerName:"Viego",level: 87 , admin:false,gender:"Male",banned:true,src:"./images/karakter6.gif"}
];


//Sayfa Başlangıcında Tüm verileri getir.
    data.forEach((item,index)=>{
    //Elementleri oluştur.
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let h4A = document.createElement("h4");
    let h4B = document.createElement("h4");
    let div = document.createElement("div")
    let yeniKarakter = document.createElement("div");


    //Butonları Oluştur.
    let sil = document.createElement("button");
    let duzenle = document.createElement("button");
    let satinAl = document.createElement("button");
    //Elementlerin İçeriklerini Belirle
    img.src = item.src;
    h2.innerHTML = `Name: ${item.playerName}`;
    h4A.innerHTML = `Level: ${item.level}`;
    h4B.innerHTML = `Gender: ${item.gender}`;
    sil.innerHTML = "sil";
    duzenle.innerHTML = "Düzenle";
    satinAl.innerHTML = "Satın Al"
    yeniKarakter.innerHTML = "<i class='fa-solid fa-plus'></i>"

    //Oluşturulan Tagleri Yeni Div'e At
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(h4A);
    div.appendChild(h4B);
    div.appendChild(sil);
    div.appendChild(duzenle);
    div.appendChild(satinAl); 
    
    //Silme İşlemi
    sil.addEventListener("click",()=>{
        div.remove();
    });

    duzenle.addEventListener("click",()=>{
    
        //Düzenleme İşlemi
        let newAd = prompt("Yeni Kullanıcı Adı : ");
        let newLevel= parseInt(prompt("Yeni Atanacak Level"));
        let newAdmin = confirm("Admin mi: ");
        let newGender = prompt("Karakter Cinsiyeti");
        let newBanned = confirm("Banlanmış mı :");
        let newImage = prompt("Yeni Profil Resmi (URL) : ");

        //Var olan verilere yeni verileri ekle
        item.playerName = newAd;
        item.level = newLevel;
        item.admin = newAdmin;
        item.banned = newBanned;
        item.gender = newGender;
        item.src = newImage;

        //Yeni Verilerin güncellenmesi
        
        img.src = item.src;
        h2.innerHTML = `Name: ${item.playerName}`;
        h4A.innerHTML = `Level: ${item.level}`;
        h4B.innerHTML = `Gender: ${item.gender}`
    });


    div.classList.add("anaYapiyiDuzenle")

    // Tüm Div'i siteMain Div'ine At
    siteMain.appendChild(div);
    siteMain.appendChild(yeniKarakter)
})

//Sadece Adminleri Getir
    admin.addEventListener("click",()=>{
        siteMain.innerHTML = ""
        data.filter((item,index)=>{
            if(item.admin === true){
                //Elementleri oluştur.
                let img = document.createElement("img");
                let h2 = document.createElement("h2");
                let h4A = document.createElement("h4");
                let h4B = document.createElement("h4");
                let div = document.createElement("div")

                //Elementlerin İçeriklerini Belirle
                img.src = item.src;
                h2.innerHTML = `Name: ${item.playerName}`;
                h4A.innerHTML = `Level ${item.level}`;
                h4B.innerHTML = `admin: ${item.admin}`;

                //Oluşturulan Tagleri Yeni Div'e At
                div.appendChild(img);
                div.appendChild(h2);
                div.appendChild(h4A);
                div.appendChild(h4B);
                div.classList.add("anaYapiyiDuzenle")

                // Tüm Div'i siteMain Div'ine At

                siteMain.appendChild(div);
                }
        })
    })

//Sadece Banlananlar
    banned.addEventListener("click",()=>{
    siteMain.innerHTML = ""
    data.filter((item)=>{
        if(item.banned === true){
            //Elementleri oluştur.
            let img = document.createElement("img");
            let h2 = document.createElement("h2");
            let h4A = document.createElement("h4");
            let h4B = document.createElement("h4");
            let div = document.createElement("div")

            //Elementlerin İçeriklerini Belirle
            img.src = item.src;
            h2.innerHTML = `Name: ${item.playerName}`;
            h4A.innerHTML = `Level ${item.level}`;
            h4B.innerHTML = `admin: ${item.admin}`;

            //Oluşturulan Tagleri Yeni Div'e At
            div.appendChild(img);
            div.appendChild(h2);
            div.appendChild(h4A);
            div.appendChild(h4B);
            div.classList.add("anaYapiyiDuzenle")

            // Tüm Div'i siteMain Div'ine At

            siteMain.appendChild(div);
            };
        });
    });

    //Sadece 60 Level Ve Üzeri.
    level.addEventListener("click",()=>{
        siteMain.innerHTML= "";
        data.filter((item)=>{
            if(item.level >=60){
                //Elementleri oluştur.
            let img = document.createElement("img");
            let h2 = document.createElement("h2");
            let h4A = document.createElement("h4");
            let h4B = document.createElement("h4");
            let div = document.createElement("div")

            //Elementlerin İçeriklerini Belirle
            img.src = item.src;
            h2.innerHTML = `Name: ${item.playerName}`;
            h4A.innerHTML = `Level ${item.level}`;
            h4B.innerHTML = `admin: ${item.admin}`;

            //Oluşturulan Tagleri Yeni Div'e At
            div.appendChild(img);
            div.appendChild(h2);
            div.appendChild(h4A);
            div.appendChild(h4B);
            div.classList.add("anaYapiyiDuzenle")

            // Tüm Div'i siteMain Div'ine At

            siteMain.appendChild(div);
            
            };

        });
    });


//Sadece Kadın Oyuncular
    female.addEventListener("click",()=>{
    siteMain.innerHTML = "";
    data.filter((item)=>{
        if(item.gender === "Female"){
              //Elementleri oluştur.
              let img = document.createElement("img");
              let h2 = document.createElement("h2");
              let h4A = document.createElement("h4");
              let h4B = document.createElement("h4");
              let div = document.createElement("div")
  
              //Elementlerin İçeriklerini Belirle
              img.src = item.src;
              h2.innerHTML = `Name: ${item.playerName}`;
              h4A.innerHTML = `Level ${item.level}`;
              h4B.innerHTML = `admin: ${item.admin}`;
  
              //Oluşturulan Tagleri Yeni Div'e At
              div.appendChild(img);
              div.appendChild(h2);
              div.appendChild(h4A);
              div.appendChild(h4B);
              div.classList.add("anaYapiyiDuzenle")
  
              // Tüm Div'i siteMain Div'ine At
  
              siteMain.appendChild(div);
        };
    });
});

//Sadece Erkek Oyuncular
    male.addEventListener("click",()=>{
        siteMain.innerHTML = "";
        data.filter((item)=>{
            if(item.gender === "Male"){
                   //Elementleri oluştur.
              let img = document.createElement("img");
              let h2 = document.createElement("h2");
              let h4A = document.createElement("h4");
              let h4B = document.createElement("h4");
              let div = document.createElement("div")
  
              //Elementlerin İçeriklerini Belirle
              img.src = item.src;
              h2.innerHTML = `Name: ${item.playerName}`;
              h4A.innerHTML = `Level ${item.level}`;
              h4B.innerHTML = `admin: ${item.admin}`;
  
              //Oluşturulan Tagleri Yeni Div'e At
              div.appendChild(img);
              div.appendChild(h2);
              div.appendChild(h4A);
              div.appendChild(h4B);
              div.classList.add("anaYapiyiDuzenle")
  
              // Tüm Div'i siteMain Div'ine At
  
              siteMain.appendChild(div);
            }
        })
    });



