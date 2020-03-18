export default {
  // 支持值为 Object 和 Array
  'POST /api/auth/oauth/token': {
    success: true,
    rescode: 1,
    data: {
      "username": 'daoyi',
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaWNlbnNlIjoiY3 JlYXRlIGJ5IEdyZWVudG93biIsInVzZXJfaWQiOjYxLCJ1c2VyX25hbWUiOiIxNTAxMzY2OTY4M iIsInNjb3BlIjpbInNlcnZlciJdLCJlcnJvckNvZGUiOjAsImV4cCI6MTU4MjExNjA1MiwianRp IjoiY2NlNmY4MTItNGJmMC00NWRiLTk3NjYtZTAwNGNmZWFjNmMzIiwiY2xpZW50X2lkIjoicnV 4aW4ifQ.wy9szFslyWmZ1mmXW0oLzD0rv7VfYA6jy5k91se2i28",
      "token_type": "bearer",
      "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJsaWNlbnNlIjoiY3JlYXRlIGJ5IEdyZWVudG93biIsInVzZXJfaWQiOjYxLCJ1c2VyX25hbWUiOiIxNTAxMzY2OTY4MiIsInNjb3BlIjpbInNlcnZlciJdLCJhdGkiOiJjY2U2ZjgxMi00YmYwLTQ1ZGItOTc2Ni1lMDA0Y2ZlYWM2YzMiLCJlcnJvckNvZGUiOjAsImV4cCI6MTU4NDEwMzI1MiwianRpIjoiOTIxM2NlOTctZmIzZS00Nzk1LWE2OTAtY2NmMDU5ODU3NzMzIiwiY2xpZW50X2lkIjoicnV4aW4ifQ.8SSSz8eYkUZfbc7NXU4oqAZ_XvrnuMF1RjiZ‐KgRezQ",
      "expires_in": 604799,
      "scope": "server",
      "license": "create by Greentown",
      "user_id": 61,
      "errorCode": 0,
      "jti": "cce6f812‐4bf0‐45db‐9766‐e004cfeac6c3"
    }
  },

  // GET POST 可省略
  '/api/users/1': {
    success: true,
    rescode: 1,
    data: [
      {
        funName: '1', inver: '一号', serve: '公共区域', finTime: '2020-3-16', user: '专家',
        department: '研发中心', state: '3', action: '编辑', id: 1
      },
      {
        funName: '2', inver: '2号', serve: '公共区域', finTime: '2020-3-16', user: '专家',
        department: '研发中心', state: '3', action: '编辑', id: 2
      },
      {
        funName: '3', inver: '4号', serve: '公共区域', finTime: '2020-3-16', user: '专家',
        department: '研发中心', state: '3', action: '编辑', id: 3
      },
      {
        funName: '4', inver: '5号', serve: '公共区域', finTime: '2020-3-16', user: '专家',
        department: '研发中心', state: '3', action: '编辑', id: 4
      },
      {
        funName: '5', inver: '7号', serve: '公共区域', finTime: '2020-3-16', user: '专家',
        department: '研发中心', state: '3', action: '编辑', id: 5
      }]
  },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    console.log(req)
    // if (req.username == 1) {
    //   res.status('200').send()
    //   res.data = {
    //     name: xxx,
    //     age: 20
    //   }
    // } else {
    //   res.status('200').send()
    //   res.data = {
    //     name: 'ui',
    //     age: 20
    //   }
    // }
    res.end('OK');
  },

  'GET /api/locat': {
    success: true,
    rescode: 1,
    data: {
      provinces: ['安徽省', '澳门特别行政区', '北京'],
      cities: [
        ['合肥市', '芜湖市', '蚌埠市', '淮南市', '马鞍山市', '淮北市', '铜陵市', '安庆市', '黄山市', '滁州市', '阜阳市', '宿州市', '六安市', '亳州市', '池州市', '宣城市'],
        ['澳门半岛', '离岛'],
        ['北京市'],
      ],
      counties:
        [
          [
            ['瑶海区', '庐阳区', '蜀山区', '包河区', '长丰县', '肥东县', '肥西县', '庐江县', '其它区', '巢湖市'],
            ['镜湖区', '戈江区', '鸠江区', '三山区', '芜湖县', '繁昌县', '南陵县', '无为县', '其它区'],
            ['龙子湖区', '蚌山区', '禹会区', '淮上区', '怀远区', '五河县', '固镇县', '其它区'],
            ['大通区', '田家庵区', '谢家集区', '八公山区', '潘集区', '凤台县', '寿县', '其它区'],
            ['花山区', '雨山区', '博望区', '当涂县', '含山县', '和县', '其它区'],
            ['杜集区', '相山区', '烈山区', '濉溪县', '其它区'],
            ['铜官区', '郊区', '义安区', '枞阳县', '其它区'],
            ['迎江区', '大观区', '宜秀区', '怀宁县', '潜山县', '太湖县', '宿松县', '望江县', '岳西县', '桐城市', '其它区'],
            ['屯溪区', '黄山区', '徽州区', '歙县', '休宁县', '祁门县', '其它区'],
            ['琅琊区', '南谯区', '来安息', '全椒县', '定远县', '凤阳县', '天长市', '明光市', '其它区'],
            ['颍州区', '颍东区', '临泉县', '太和县', '阜南县', '颍上县', '界首市', '其它区'],
            ['埇桥区', '砀山县', '萧县', '灵璧县', '泗县', '其它区'],
            ['金安区', '裕安区', '叶集区', '霍邱县', '舒城县', '金寨县', '霍山县', '其它区'],
            ['谯城区', '涡阳区', '蒙城区', '利辛县', '其它区'],
            ['贵池区', '东至县', '石台县', '青阳县', '其它区'],
            ['宣州区', '郎溪县', '广德县', '泾县', '绩溪县', '旌德县', '宁国市', '其它区']
          ],
          [
            ['澳门']
          ],
          [
            ['东城区', '西城区', '朝阳区', '丰台区', '石景山区', '海淀区', '门头沟区', '房山区', '通州区', '顺义区', '昌平区', '大兴区', '怀柔区', '平谷区', '密云县', '延庆县', '其它区'],
          ],
        ]
    }
  },
};