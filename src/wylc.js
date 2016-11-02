/**
 * Created by Administrator on 2016/10/18.
 */
angular.module('wylc', ['pp.service', 'ui.router'])
    .controller('wylcController', function ($http, $scope, MainService, $rootScope) {
        var data = $scope.data = {};
        var actions = $scope.actions = {};

        //MainService.aHrefClass = 'wylc';
        $rootScope.aHrefClass = 'wylc';

        //wylc_main_top下的数据
        data.wmt = [
            {
                href: 'wylc.wmContent1',
                liClass: 'first_li',
                tit: '推荐标',
                content: '是针对高薪白领，工薪阶层等人群的借款理财服务。'
            },
            {
                href: 'wylc.wmContent2',
                liClass: 'second_li',
                tit: '理财产品',
                content: '智能投标、循环出借'
            },
            {
                href: 'wylc.wmContent3',
                liClass: 'last_li',
                tit: '债权转让',
                content: '是针对高薪白领，工薪阶层等人群的借款理财服务。'
            }
        ];

        //wylc_main_content1下的数据

        /*data.wmc1 = [
          {
            "userName": "Y06PP0197( 一）",
            "pro": "0.7%",
            "money": "￥10,000",
            "num1": "15.00%",
            "num2": "+6.50%",
            "time": "6",
            "num3": "72825",
            "btnClass": "btn"
          },
          {
            "userName": "Y06PP0197( 一）",
            "pro": "0.7%",
            "money": "￥10,000",
            "num1": "15.00%",
            "num2": "+6.50%",
            "time": "6",
            "num3": "72825",
            "btnClass": "btn"
          },
          {
            "userName": "Y06PP0197( 一）",
            "pro": "0.7%",
            "money": "￥10,000",
            "num1": "15.00%",
            "num2": "+6.50%",
            "time": "6",
            "num3": "72825",
            "btnClass": "btn"
          },
          {
            "userName": "Y06PP0197( 一）",
            "pro": "0.7%",
            "money": "￥10,000",
            "num1": "15.00%",
            "num2": "+6.50%",
            "time": "6",
            "num3": "72825",
            "btnClass": "btn"
          },
          {
            "userName": "Y06PP0197( 一）",
            "pro": "0.7%",
            "money": "￥10,000",
            "num1": "15.00%",
            "num2": "+6.50%",
            "time": "6",
            "num3": "72825",
            "btnClass": "btn"
          },
          {
            "userName": "Y06PP0197( 一）",
            "pro": "0.7%",
            "money": "￥10,000",
            "num1": "15.00%",
            "num2": "+6.50%",
            "time": "6",
            "num3": "72825",
            "btnClass": "btn"
          },
          {
            "userName": "Y06PP0197( 一）",
            "pro": "0.7%",
            "money": "￥10,000",
            "num1": "15.00%",
            "num2": "+6.50%",
            "time": "6",
            "num3": "72825",
            "btnClass": "btn"
          },
          {
            "userName": "Y06PP0197( 一）",
            "pro": "0.7%",
            "money": "￥10,000",
            "num1": "15.00%",
            "num2": "+6.50%",
            "time": "6",
            "num3": "72825",
            "btnClass": "btn"
          }
        ]*/

        //wylc_main_content3下的数据
        data.wmc3 = [
                {
                    td1: '1',
                    td2: 'Y06PP0149',
                    td3: '13400.86元',
                    td4: '13112.13元',
                    td5: '326.86',
                    td6: '2016-09-13',
                    td7: '立即购买',
                },
                {
                    td1: '0.95',
                    td2: 'Y06PP0139',
                    td3: '9705.36元',
                    td4: '8748.56元',
                    td5: '549.36',
                    td6: '2016-06-17',
                    td7: '立即购买',
                },
                {
                    td1: '1',
                    td2: 'Y06PP0149',
                    td3: '13400.86元',
                    td4: '13112.13元',
                    td5: '326.86',
                    td6: '2016-09-13',
                    td7: '立即购买',
                },
                {
                    td1: '0.95',
                    td2: 'Y06PP0139',
                    td3: '9705.36元',
                    td4: '8748.56元',
                    td5: '549.36',
                    td6: '2016-06-17',
                    td7: '立即购买',
                }
        ];

        //切换wylc_main_top下的li的current的类名
        data.wmtCurrentClass = 'first_li';
        actions.tabClass = function (className){
            data.wmtCurrentClass = className;
        }

        //切换wylc_main_bottom devide_page下的this_page类名
        data.thisPage = 1;
        actions.tabThisPage = function (pageNum) {
            if (pageNum === 'prev') {
                if (data.thisPage <= 1) {
                    return;
                }
                data.thisPage--;
            } else if (pageNum === 'next') {
                if (data.thisPage >= 5) {
                    return;
                }
                data.thisPage++;
            } else if (pageNum === 'home') {
                data.thisPage=1;
            } else if (pageNum === 'end') {
                data.thisPage=5;
            } else {
                data.thisPage = pageNum;
            }

            $.ajax({
                type: 'get',
                url: './data/data.json',
                success: function(datas){
                    console.log(datas);
                    data.wmc1 = datas;
                    console.log(data.wmc1);
                    $scope.$apply();
                }
            })
            /*$http({
                method: 'GET',
                url: './data/data.json'
            }).success(function(data){
                console.log(data.length);
                data.wmc1 = data;
                // $scope.$apply();
            })*/
        }

        actions.reqHttp = function(){
            $http({
                method: 'GET',
                url: './data/data.json',
                header:{
                    'cache-control': 'max-age=36000'
                }
            }).then(function(response){
                console.log(response.data.length);
            },function(response){
                console.log(response.data);
            })
        }

    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/wylc/wmContent1');
        $stateProvider
            .state('wylc.wmContent1', {
                url: '/wmContent1',
                templateUrl: './subHtml/wmContent1.html',
                controller: 'wylcController'
            })
            .state('wylc.wmContent2', {
                url: '/wmContent2',
                templateUrl: './subHtml/wmContent2.html',
                controller: 'wylcController'
            })
            .state('wylc.wmContent3', {
                url: '/wmContent3',
                templateUrl: './subHtml/wmContent3.html',
                controller: 'wylcController'
            })
    });
    