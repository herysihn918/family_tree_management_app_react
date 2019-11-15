//templates

    //base template    
    OrgChart.templates.family_template_base = Object.assign({}, OrgChart.templates.ana);

    OrgChart.templates.family_template_base.size = [200, 140];

    OrgChart.templates.family_template_base.plus = 
        '<rect x="0" y="0" width="36" height="36" rx="12" ry="12" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></rect>'
        + '<line x1="4" y1="18" x2="32" y2="18" stroke-width="1" stroke="#aeaeae"></line>'
        + '<line x1="18" y1="4" x2="18" y2="32" stroke-width="1" stroke="#aeaeae"></line>';
    OrgChart.templates.family_template_base.minus = 
        '<rect x="0" y="0" width="36" height="36" rx="12" ry="12" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></rect>'
        + '<line x1="4" y1="18" x2="32" y2="18" stroke-width="1" stroke="#aeaeae"></line>';
    
    OrgChart.templates.family_template_base.expandCollapseSize = 36;
    
    OrgChart.templates.family_template_base.node = '';
    
    OrgChart.templates.family_template_base.rippleRadius = 45;
    
    OrgChart.templates.family_template_base.name_1 = '<text class="name_1" style="font-size: 12px;" fill="#000000" x="100" y="105" text-anchor="middle">{val}</text>';
    OrgChart.templates.family_template_base.name_2 = '<text class="name_2" style="font-size: 12px;" fill="#000000" x="235" y="105" text-anchor="middle">{val}</text>';
    
    OrgChart.templates.family_template_base.title_1 = '<text class="title_1" style="font-size: 12px;" fill="#aeaeae" x="100" y="120" text-anchor="middle">{val}</text>';
    OrgChart.templates.family_template_base.title_2 = '<text class="title_2" style="font-size: 12px;" fill="#aeaeae" x="235" y="120" text-anchor="middle">{val}</text>';
    
    OrgChart.templates.family_template_base.img_1 = '<clipPath id="{randId}"><circle cx="100" cy="45" r="40"></circle></clipPath><circle stroke-width="3" fill="none" stroke="#080" cx="100" cy="45" r="45"></circle><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="60" y="5"  width="80" height="80"></image>';
    
    OrgChart.templates.family_template_base.linkAdjuster =
        {
            fromX: 0,
            fromY: 0,
            toX: 0,
            toY: -95
        };

    
    //son-wife

    OrgChart.templates.family_template_son_wife = Object.assign({}, OrgChart.templates.family_template_base);
    OrgChart.templates.family_template_son_wife.size = [335, 140];
    OrgChart.templates.family_template_son_wife.node = '<line x1="145" x2="190" y1="45" y2="45" stroke-width="2" stroke="#f57c00"></line>';
    OrgChart.templates.family_template_son_wife.img_1 = '<clipPath id="{randId}"><circle cx="100" cy="45" r="40"></circle></clipPath><circle stroke-width="3" fill="none" stroke="#006" cx="100" cy="45" r="45"></circle><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="60" y="5"  width="80" height="80"></image>';
    OrgChart.templates.family_template_son_wife.img_2 = '<clipPath id="{randId}"><circle cx="235" cy="45" r="40"></circle></clipPath><circle stroke-width="3" fill="none" stroke="#ac193d" cx="235" cy="45" r="45"></circle><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="195" y="5"  width="80" height="80"></image>';
    OrgChart.templates.family_template_son_wife.linkAdjuster =
        {
            fromX: -65,
            fromY: 0,
            toX: 0,
            toY: -95
        };


    //daughter-husband

    OrgChart.templates.family_template_daughter_husband = Object.assign({}, OrgChart.templates.family_template_base);
    OrgChart.templates.family_template_daughter_husband.size = [335, 140];
    OrgChart.templates.family_template_daughter_husband.node = '<line x1="145" x2="190" y1="45" y2="45" stroke-width="1" stroke="#f57c00"></line>';
    OrgChart.templates.family_template_daughter_husband.img_1 = '<clipPath id="{randId}"><circle cx="100" cy="45" r="40"></circle></clipPath><circle stroke-width="3" fill="none" stroke="#006" cx="100" cy="45" r="45"></circle><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="60" y="5"  width="80" height="80"></image>';
    OrgChart.templates.family_template_daughter_husband.img_2 = '<clipPath id="{randId}"><circle cx="235" cy="45" r="40"></circle></clipPath><circle stroke-width="3" fill="none" stroke="#ac193d" cx="235" cy="45" r="45"></circle><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="195" y="5"  width="80" height="80"></image>';
    OrgChart.templates.family_template_daughter_husband.linkAdjuster =
        {
            fromX: 65,
            fromY: 0,
            toX: 0,
            toY: -95
        };
//end of template

//family node json

var myfamily = [
    { id: "1", tags: ["family_template_son_wife"], name1: "King George VI", name2: "Queen Elizabeth,", title2: "The Queen Mother", img1: "https://balkangraph.com/js/img/f1.png", img2: "https://balkangraph.com/js/img/f2.png" },
    { id: "2", pid: 1, tags: ["family_template_daughter_husband"], name1: "Prince Philip", name2: "Queen Elizabeth II", title1: "Duke of Edinburgh", img1: "https://balkangraph.com/js/img/f3.png", img2: "https://balkangraph.com/js/img/f5.png" },
    { id: "3", pid: 1, tags: ["family_template_alone"], name1: "Princess Margaret", img1: "https://balkangraph.com/js/img/f6.png" },
    { id: "4", pid: 2, tags: ["family_template_son_wife"], name1: "Charles,", name2: "Camila,", title2: "Duchess of Cornwall", title1: "Prince of Wales", img2: "https://balkangraph.com/js/img/f7.png", img1: "https://balkangraph.com/js/img/f8.png"},
    { id: "5", pid: 2, tags: ["family_template_alone"], name1: "Anne", title1: "Princess Royal", img1: "https://balkangraph.com/js/img/f10.png" },
    { id: "6", pid: 2, tags: ["family_template_alone"], name1: "Prince Andrew", title1: "Duke of York", img1: "https://balkangraph.com/js/img/f11.png" },
    { id: "7", pid: 2, pid: 2, tags: ["family_template_alone"], name1: "Prince Edward", title1: "Earl of Wessex", img1: "https://balkangraph.com/js/img/f12.png" },
    { id: "8", pid: 4, tags: ["family_template_son_wife"], name2: "Catherine,", name1: "Prince William", title1: "Duchess of Cambridge", title2: "Duch of Cambridge", img2: "https://balkangraph.com/js/img/f13.png", img1: "https://balkangraph.com/js/img/f14.png" },
    { id: "9", pid: 4, tags: ["family_template_son_wife"], name1: "Prince Harry", name2: "Meghan Markle", img1: "https://balkangraph.com/js/img/f15.png", img2: "https://balkangraph.com/js/img/f16.png" },
    { id: "10", pid: 8, tags: ["family_template_alone"], name1: "Prince George of Cambridge", img1: "https://balkangraph.com/js/img/f17.png" },
    { id: "11", pid: 8, tags: ["family_template_alone"], name1: "Prince Charlotte of Cambridge", img1: "https://balkangraph.com/js/img/f18.png" },
    { id: "12", pid: 8, tags: ["family_template_alone"], name1: "Prince Louis of Cambridge", img1: "https://balkangraph.com/js/img/f19.png" }
]

//create chart

var chart = new OrgChart(document.getElementById("familyTree"), {
    tags: {
        "family_template_alone": {
            template: "family_template_base"
        },
        "family_template_son_wife": {
            template: "family_template_son_wife"
        },
        "family_template_daughter_husband": {
            template: "family_template_daughter_husband"
        }
    },
        
    nodeMouseClick: OrgChart.action.none,
    mouseScrool: OrgChart.action.zoom,
    nodeBinding: {
        name_1: "name1",
        name_2: "name2",
        
        title_1: "title1",
        title_2: "title2",
        
        img_1: "img1",
        img_2: "img2",
        
    },
    nodes: myfamily
});   

function callHandler(nodeId) {
    var nodeData = chart.get(nodeId);
    var employeeName = nodeData["name"];
    window.open('https://webcall.me/' + employeeName, employeeName, 'width=340px, height=670px, top=50px, left=50px');
}