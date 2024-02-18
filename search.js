
const search_box = document.querySelector("#input")


const result_area = document.querySelector("#search_result_section")


var big_codes 
async function fetcher(){
	const item = await sessionStorage.getItem("league_data")
	const parser = JSON.parse(item)

	big_codes = parser
}

fetcher()

var key_holder =""

function bold(data) {
    console.log(data)
    //const dec_data = JSON.parse(data)

    console.log(data.first, data.second, data.third)

    sessionStorage.setItem('leagueInfoKey', data.first);
    sessionStorage.setItem('leagueInfoName', data.second);

    if (data.third != '') {
        sessionStorage.setItem('leagueInfoLogo', data.third);
    }

    
    var winLoc = $(location).attr("href");
    winLoc = winLoc.replace('search.html', '');
    var WindowNW = window.open(
        winLoc + 'widgetLeagueInfo.html',
        "_blank",
        "width=700, height=650");

}

function trial({name, school, address}){
    console.log("we are trying")
    console.log(name, school, address)
}

var a 
var b
var c
        function touch(){
            
        }

function changing(){
	

 		const filter = big_codes.filter(item=> item.league_name.match(search_box.value) );

 		const map = filter.map((item)=>{

            const data = {
 			
 			first : item.league_id,
 			second : item.league_name,
 			third : item.league_logo

        }
        const enc_data = JSON.stringify(data)






 			return(
 
 				`	<div>

 						<div  class = "btn btn-outline-light" id = "search_line" onclick = 'bold(${enc_data})' ><img src = ${item.league_logo} id = "league_logo"> <h4>${item.league_name}<h6>${item.country_name}</h6> </div>
 						<hr>
 					</div>`
 				)
 	})

 	result_area.innerHTML = map


}

search_box.addEventListener("change", function(e){
	
})