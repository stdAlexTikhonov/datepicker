define( [
		'qlik',
        'text!./template.ng.html',
		'css!./style.css'
    ],
    function ( qlik, ngTemplate, style ) {
        'use strict';

        return {
            definition: {
				type: "items",
				component: "accordion",
				items: {
					appearance: { 
						uses: "settings",
						items: {
							var_name: {
								ref: "var_name",
								label: "Имя переменной",
								type: "string",
								defaultValue: {}
							}
						}
					}
				}
			},
            // snapshot: {canTakeSnapshot: true},
            template: ngTemplate,
            controller: ['$scope', function ( $scope ) {
				
				$scope.changeDate = function(date) {
					$scope.mydate = date;
					//$scope.weekDay=1;
					//console.log(new Date(date).format('yyyy-mm-dd'));
					//console.log(date.toLocaleDateString('ru-RU'));
					//qlik.currApp().variable.setContent($scope.layout.var_name, date.toLocaleDateString('ru-RU') );
					qlik.currApp().variable.setContent('vDateMax', date.toLocaleDateString('ru-RU') );
					console.log(date);
				}

				// $scope.changeDate(new Date(Date.now()-86400000));
				
				// $("#my_date").parent().css({"height":"30px", "margin": "auto", "width" : "100%"}).parent().css({"display":"flex","height":"100%"}).parent().parent().parent().parent().parent().parent().css("height","60px");
				// $(".date").parent().css({"height":"30px", "margin": "auto", "width" : "100%"}).parent().css({"display":"flex","height":"100%"}).parent().parent().parent().parent().parent().css("height","60px");
				//$(.quick-navigation.ng-isolate-scope).css("visibility","hidden");
				$(".picker").on("change", function() {
					var date = $(this).val();
					$(".date").val(date);
					qlik.currApp().variable.setContent('vDateMax', date );
					console.log(date);
				});
            }]
        };
    } );