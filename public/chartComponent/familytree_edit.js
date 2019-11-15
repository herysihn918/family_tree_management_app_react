
const API_URL = 'http://localhost:2772/api/'
const memId = localStorage.getItem('memId')
var chart

//family tag json
var familyGroupTag = {
    group: true,
    template: "group_grey",
    groupState: OrgChart.EXPAND
};

var selected_node_id;

//node menu
var nodeMenu = {
    nodeView: {
        text: "Details",
        icon: '<svg id="i-eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="17" cy="15" r="1" /><circle cx="16" cy="16" r="6" /><path d="M2 16 C2 16 7 6 16 6 25 6 30 16 30 16 30 16 25 26 16 26 7 26 2 16 2 16 Z" /></svg>',
        onClick: _nodeView
    },
    nodeEdit: {
        text: "Edit",
        icon: '<svg id="i-edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M30 7 L25 2 5 22 3 29 10 27 Z M21 6 L26 11 Z M5 22 L10 27 Z" /></svg>',
        onClick: _nodeEdit
    },
    nodeAdd: {
        text: "Add",
        icon: '<svg id="i-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 2 L16 30 M2 16 L30 16" /></svg>',
        onClick: _nodeAdd
    },
    nodeRemove: {
        text: "Remove",
        icon: '<svg id="i-trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" /></svg>',
        onClick: _nodeRemove
    }
}

//family node json
var myfamily = []
var arr_tags = []
var tags = {}

//create chart function
function make_chart(){
    chart = new OrgChart(document.getElementById("familyTree"), {
        template: "ula",
        tags: tags,
        toolbar: {
            layout: true,
            zoom: true,
            fit: true,
            expandAll: false
        },
        
        nodeMouseClick: OrgChart.action.none,
        mouseScrool: OrgChart.action.zoom,
        nodeBinding: {
            field_0: "firstName",
            field_1: "lastName",
            field_2: "profession",
            img_0: "img"
            
        },
        nodeMenu: nodeMenu,
        nodes: myfamily
    });
}

fetch(API_URL+'myFamily/'+memId.toString())
.then(res => res.json())
.then(json => {
    myfamily = json.data.myFamily
    arr_tags = json.data.tagList
    arr_tags.map(tag => tags[tag] = familyGroupTag)
    tags["noLineage"] = { template: "olivia" }
    
    make_chart()
    document.getElementById('loading').style.visibility = 'hidden'
})
.catch(err => console.log(err))

//close buttons
document.getElementById('cancelButton').addEventListener('click', () => document.getElementById('editForm').style.display = 'none')
document.getElementById('CloseButton').addEventListener('click', () => document.getElementById('ViewForm').style.display = 'none')
document.getElementById('acancelButton').addEventListener('click', () => document.getElementById('addForm').style.display = 'none')

//save buttons
    //edit save
document.getElementById('saveButton').addEventListener('click', () => {
    var nodeInfo = chart.get(selected_node_id);

    var firstName = document.getElementById('firstName')
    var lastName = document.getElementById('lastName')
    var profession = document.getElementById('profession')
    var aliveOrDead = document.getElementById('aliveOrDead')
    var gender = document.getElementById('gender')
    var dateOfBirth = document.getElementById('dateOfBirth')

    nodeInfo.firstName = firstName.value
    nodeInfo.lastName = lastName.value
    nodeInfo.profession = profession.value
    nodeInfo.aliveOrDead = aliveOrDead.value
    nodeInfo.gender = gender.value
    nodeInfo.dateOfBirth = dateOfBirth.value

    axios.post(API_URL+'update_member_info', nodeInfo)
    .then(res => {
        if (res.status == 200 && res.data.success == 'true'){
            chart.updateNode(nodeInfo)
            document.getElementById('editForm').style.display = 'none'
        }
    })
    .catch(err => console.log(err))

    
})
    //add save
document.getElementById('asaveButton').addEventListener('click', () => {
    var nodeInfo = chart.get(selected_node_id)

    var kindMenu = document.getElementById('kindMenu')
    var firstName = document.getElementById('afirstName')
    var lastName = document.getElementById('alastName')
    var profession = document.getElementById('aprofession')
    var aliveOrDead = document.getElementById('aaliveOrDead')
    var gender = document.getElementById('agender')
    var dateOfBirth = document.getElementById('adateOfBirth')
    var photoFile = document.getElementById('photoFile')
    
    var formData = new FormData();
    formData.append('kind', kindMenu.value);
    formData.append('firstName', firstName.value);
    formData.append('lastName', lastName.value);
    formData.append('profession', profession.value);
    formData.append('aliveOrDead', aliveOrDead.value);
    formData.append('gender', gender.value);
    formData.append('dateOfBirth', dateOfBirth.value);
    formData.append('memId', memId)
    formData.append('selectedId', selected_node_id)
    formData.append('photoFile', photoFile.files[0])
    axios.post(API_URL+'add_family_member', formData)
    .then(res=>{
        if (res.status == 200 || res.data.success == 'true')
        {
            document.getElementById('addForm').style.display = 'none'
            document.getElementById('loading').style.visibility = 'visible'
            document.getElementById('familyTree').style.display = 'none'
            fetch(API_URL+'myFamily/'+memId.toString())
            .then(res => res.json())
            .then(json => {
                document.getElementById('familyTree').style.display = 'block'
                myfamily = json.data.myFamily
                arr_tags = json.data.tagList
                arr_tags.map(tag => tags[tag] = familyGroupTag)
                tags["noLineage"] = { template: "olivia" }
                
                make_chart()
                document.getElementById('loading').style.visibility = 'hidden'
                
            })
            .catch(err => console.log(err))
        }
    })        

    
})

//node menu functions

function _nodeEdit(nodeId){
    document.getElementById('addForm').style.display = 'none'
    document.getElementById('ViewForm').style.display = 'none'
    document.getElementById('editForm').style.display = 'block'
    
    selected_node_id = nodeId
    var nodeInfo = chart.get(nodeId);

    var firstName = document.getElementById('firstName')
    var lastName = document.getElementById('lastName')
    var profession = document.getElementById('profession')
    var aliveOrDead = document.getElementById('aliveOrDead')
    var gender = document.getElementById('gender')
    var dateOfBirth = document.getElementById('dateOfBirth')
    
    firstName.value = nodeInfo.firstName
    lastName.value = nodeInfo.lastName
    profession.value = nodeInfo.profession
    aliveOrDead.value = nodeInfo.aliveOrDead
    gender.value = nodeInfo.gender
    dateOfBirth.value = nodeInfo.dateOfBirth
}

function _nodeView(nodeId){
    document.getElementById('editForm').style.display = 'none'
    document.getElementById('addForm').style.display = 'none'
    document.getElementById('ViewForm').style.display = 'block'
    var nodeInfo = chart.get(nodeId);

    var firstName = document.getElementById('vfirstName')
    var lastName = document.getElementById('vlastName')
    var profession = document.getElementById('vprofession')
    var aliveOrDead = document.getElementById('valiveOrDead')
    var gender = document.getElementById('vgender')
    var dateOfBirth = document.getElementById('vdateOfBirth')
    
    firstName.value = nodeInfo.firstName
    lastName.value = nodeInfo.lastName
    profession.value = nodeInfo.profession
    aliveOrDead.value = nodeInfo.aliveOrDead
    gender.value = nodeInfo.gender
    dateOfBirth.value = nodeInfo.dateOfBirth
}

function _nodeAdd(nodeId){

    document.getElementById('editForm').style.display = 'none'
    document.getElementById('ViewForm').style.display = 'none'
    document.getElementById('addForm').style.display = 'block'
    selected_node_id = nodeId
    
    var kindMenu = document.getElementById('kindMenu')
    var firstName = document.getElementById('afirstName')
    var lastName = document.getElementById('alastName')
    var profession = document.getElementById('aprofession')
    var aliveOrDead = document.getElementById('aaliveOrDead')
    var gender = document.getElementById('agender')
    var dateOfBirth = document.getElementById('adateOfBirth')
    var photoFile = document.getElementById('photoFile')
    
    kindMenu.value = 'father' 
    firstName.value = ''
    lastName.value = ''
    profession.value = ''
    aliveOrDead.value = 1
    gender.value = 0
    dateOfBirth.value = ''
    photoFile.value = ''
}

function _nodeRemove(nodeId){
    if(confirm('Do you really want to remove this member?'))
    {
        axios.post(API_URL+'remove_family_member', {nodeId})
        .then(res => {
            if (res.status == 200 || res.data.success == 'true')
            {
                document.getElementById('loading').style.visibility = 'visible'
                document.getElementById('familyTree').style.display = 'none'
                fetch(API_URL+'myFamily/'+memId.toString())
                .then(res => res.json())
                .then(json => {
                    document.getElementById('familyTree').style.display = 'block'
                    myfamily = json.data.myFamily
                    arr_tags = json.data.tagList
                    arr_tags.map(tag => tags[tag] = familyGroupTag)
                    tags["noLineage"] = { template: "olivia" }
                    
                    make_chart()
                    document.getElementById('loading').style.visibility = 'hidden'
                    
                })
                .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err))
    } else {

    }
    
}


