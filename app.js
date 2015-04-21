/**
 * @author skaushik
 */
(function(){
	var resume = angular.module('resume',['ngRoute','ui.bootstrap']);
	resume.controller('itinary', function(){
		
		var itinaryList = [{title:'Snapshot', routeTag:'snapShot'},
							{title:'Technical Specifications', routeTag:'techSpecs'},
							{title:'Work Experience', routeTag:'workExp'},
							{title:'Experience Summary', routeTag:'expSummary'},
							{title:'Academia', routeTag:'academia'},
							{title:'Personal Info', routeTag:'personalInfo'}];
		this.itinaryList = itinaryList;
	});	
	
	resume.controller('snapShotCtrl', function($scope){
		$scope.highlightPoints = [ {points:'Balanced IT developer with 5 years of experience in JavaScript, backbone.js, Angular.js, Adobe Flex and Action Script'},
							{points:'Presently working as Senior Software Engineer (UI Technical consultant) in Professional Services team at Yodlee Info Tech'},
							{points:'Facing Client for requirement gathering and clarifications'},
							{points:'A sticker for quality, analysis, team builder and natural motivator'},
							{points:'Excellent communication skills that have been honed through interacting with various levels'},
							{points:'Have willingness and ability to quickly learn new technologies'},
							{points:'Ability to deliver projects within deadlines while maintaining quality'}];		
	});
	
	
	resume.controller('techSpecs', function($scope){
		
		$scope.techSpecList = [{title:'Operating System', content:'Windows XP, 7'},
							{title:'Languages', content:'JavaScript, HTML - CSS, Flex and ActionScript'},
							{title:'Framework/Libraries', content:'AngularJs, BankboneJs'},
							{title:'Version Control', content:'Perforce, SVN'}];
	});
	
	resume.controller('personalInfo', function($scope){
		
		$scope.techSpecList = [{title:'Father', content:'Venkatesh Prasad Babu'},
							{title:'Mother', content:'Vijayalakshmi'},
							{title:'Date of Birth', content:'17th Dec 1986'},
							{title:'Languages', content:'Engish, Kannada, Hindi and Telugu'},
							{title:'Sports', content:'Table Tennis and indoor games'}];
	});	
	
	
	resume.controller('academicCtrl', function($scope){
		
		$scope.academicList = [{course:'BE (CSE)', college:'GSSIT (VTU)', score:'58'},
							{course:'PUC', college:'PES PU College (BU)', score:'50'},
							{course:'SSLC', college:'Lourdes High School (BU)', score:'78'}];
	});
	
	resume.controller('workExp',function ($scope) {
		var workExpObj = [['Abiba Systems Pvt Ltd', 1.4],
                    ['Winfoware Technologies Ltd', 0.8],
                    ['Yodlee Info Tech Pvt Ltd', 3.6]];
	  drawChart(workExpObj);
	});
		
	
	resume.controller('CarouselDemoCtrl', function($scope){
	  $scope.myInterval = 5000;
	  $scope.slides = [
	    {
	      projName: 'File Importer',
	      client: 'Yodlee',
	      organisation: 'Yodlee Info Tech',
	      teamSize: '4',
	      role:[
	      		{points:'End to end development of the finapp'}, 
			    {points:'Developed complete UI as per wire-frames'}, 
			    {points:'Developed the complete algorithm for parsing the bank statement for all file formats'}
	      ]
	    },
	    {
	      projName: 'HSBC Tablet Version',
	      client: 'HSBC',
	      organisation: 'Yodlee Info Tech',
	      teamSize: '4',
	      role: [
	      		{points:'Complete development of the module as per the client requirement'}, 
			    {points:'Retrieving the data form the REST API and displaying in the UI'}, 
			    {points:'Making the application simple and easy to use'}
	      ]
	    },
	    {
	      projName: 'Moneycenter',
	      client: 'NedBank, Harris, HSBC, Ally, M&T, BAC RHB',
	      organisation: 'Yodlee Info Tech',
	      teamSize: 'Varying team size',
	      role: [
	      		{points:'Providing the UI technical consultation to the Client'}, 
			    {points:'Majorly involved in the technical discussions with Client'}, 
			    {points:'Requirement gathering '},
			    {points:'Developing the UI modules with different technologies and performing the cross browser testing'},
			    {points:'Customizing the existing module as per the client requirements'},
			    {points:'Been the sole owner for delivering the UI customization for Clients like HSBC, MandT and NedBank and others'}
	      ]
	    },
	    {
	      projName: 'MDAS (Meter Data Acquisition System)',
	      client: 'Yodlee',
	      organisation: 'Yodlee Info Tech',
	      teamSize: '4',
	      role: [
	      		{points:'Design and development of the interactive UI (Flex 3.5 & 4, Action Script) for presenting the data'}, 
			    {points:'Development of the custom components and custom events'}, 
			    {points:'Developing the backend code (JSP & Core Java) for applying business logic and fetching (SQL queries) the data (XML & List)   from data model'},
			    {points:'Client interaction for getting the business logic'}
	      ]
	    }
	  ];
	});
	
	
	function drawChart(workExpObj){
		$('#container').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Work Experience'
            },
            tooltip: {
                 pointFormat: '{series.name}: <b>{point.y} Years</b>'
            },
            legend: {
			    align: 'right',
			    layout: 'vertical',
			    verticalAlign: 'middle'
			},
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Experience',
                innerSize: '50%',
                data: workExpObj
            }]
        });
	}
		
	resume.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/snapShot',{
				controller: 'snapShotCtrl',
				templateUrl:'template/snapShot.html'
			})
			.when('/techSpecs',{
				controller: 'techSpecs',
				templateUrl:'template/techSpecs.html'
			})
			.when('/workExp',{
				controller: 'workExp',
				templateUrl:'template/workExp.html'
			})	
			.when('/expSummary',{
				controller: 'CarouselDemoCtrl',
				templateUrl:'template/expSummary.html'
			})	
			.when('/academia',{
				controller: 'academicCtrl',
				templateUrl:'template/academia.html'
			})	
			.when('/personalInfo',{
				controller: 'personalInfo',
				templateUrl:'template/personalInfo.html'
			})			
			.otherwise({
	            redirectTo : '/snapShot'
	        });
	}]);
	
	
})();
