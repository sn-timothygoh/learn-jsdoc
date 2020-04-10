# 简介
该项目是由 **SNSoft Sdn Bhd** 推出的一项培训功课，主要培训培训生适应后端开发的环境。

#### MERN 是什么？
| | |
| - | - |
| [**M** ongoDB](https://www.mongodb.com) | 跨平台文档式数据库 |
| [**E** xpressJS](https://expressjs.com/en/starter/basic-routing.html) | JS框架，后端路由器 |
| [**R** eactJS](https://reactjs.org/docs/getting-started.html) | 前端JS框架 |
| [**N** odeJS](https://nodejs.org/en/docs/) | JS 运行环境 |


# 使用说明
> ## 使用前：
>> ### 组件需求
>>> 1. <a href="https://redis.io/download" target="_blank">Redis</a>
>>>> 安装成功后运行，并确保运行端口是 6379

> ## 系统运行：
- 主文件夹为 client 及 server
    + Client 运行（端口 3000）
    ```bash
        learn-mean> cd client
        learn-mean\client> npm start
    ```
    + Server 运行（端口 5000）
    ```bash
        learn-mean> cd server
        learn-mean\server> node server.js
    ```

# 系统流程
从 News Feed 界面开始
<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;Electron\&quot; modified=\&quot;2020-04-07T07:11:13.308Z\&quot; agent=\&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) draw.io/12.9.3 Chrome/80.0.3987.158 Electron/8.2.0 Safari/537.36\&quot; etag=\&quot;ISybJElsLuhX_D22DPC1\&quot; version=\&quot;12.9.3\&quot; type=\&quot;device\&quot;&gt;&lt;diagram id=\&quot;C5RBs43oDa-KdzZeNtuy\&quot; name=\&quot;Page-1\&quot;&gt;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&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<script type="text/javascript" src="https://app.diagrams.net/js/viewer.min.js"></script>


# 参数参考
## 用户（User）参数
| 参数 | 种类 | 必填 | 内容 / 注解 |
| :- | :- | :- | :- |
| _id | String | 自动生成 | MongoDB ObjectID，用以验证用户权限 |
| fname | String | 是 | 用户名字 |
| lname | String | 是 | 用户姓氏 |
| username | String | 是 | 用户登入名，用以登录 |
| pwd | String | 是 | 用户密码，用以登录 |
| createdAt | Timestamp | 自动生成 | 用户账号创建的时间与日期 |
| updatedAt | Timestamp | 自动生成 | 用户账号最后更新时间与日期 |

## 贴文（Feeds）参数
| 参数 | 种类 | 必填 | 内容 / 注解 |
| :- | :- | :- | :- |
| _id | String | 自动生成 | N/A |
| user | Array | 否 | 贴文作者OID与点赞者OID |
| upvote | Number | 否 | 总赞数 |
| downvote | Number | 否 | 总差评数 |
| content | String | 是 | 贴文内容 |
| createdAt | Timestamp | 自动生成 | 贴文创建时间与日期，可用于计算贴文的发布时间 |
| updatedAt | Timestamp | 自动生成 | 贴文最后更新时间与日期，可用于计算贴文的发布时间 |


# 代码运作
## 用户
### 注册
```js
    // ./server/routes/users.js

    router.route("/add").post(async (req, res) => {
        const user = new User({
            fname: req.body.fname,
            lname: req.body.lname,
            username: req.body.username,
            pwd: req.body.password
        });
        try {
            const savedUser = await user.save();
            res.send({
                user: savedUser._id
            });
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    });
```

##### 成功注册例子
```json
    {
        header: {
            auth-header: jwt-token
        },
        status: 200
    }

    // 用户发出请求
    {
        "fname": "Timothy",
        "lname": "Goh",
        "username": "tim",
        "pwd": "tim",
    }

    // MongoDB 数据存档
    {
        "_id":{"$oid":"5e68e6404f907236b0cfdc1f"},
        "fname":"Timothy","lname":"Goh",
        "username":"tim",
        "pwd":"$2a$10$yCPFUMcPscB5jgxzy5r/kOmG3zqGOxOEiKJuYPm3Hp9HM7/QcUkU6",
        "createdAt":{"$date":{"$numberLong":"1583932992922"}},
        "updatedAt":{"$date":{"$numberLong":"1583932992922"}}
    }
```
用户密码与数据库之所以有分别是因为在前端应用了``bcrypt``来让密码复杂化，可参考``./client/src/pages/Timothy/components/create-user.component.js``。用户注册成功后将自动跳转之贴文界（News Feed）。
```js
    // ./client/src/pages/Timothy/components/create-user.component.js

    import bcrypt from "bcryptjs";
    
    export default class CreateUser extends React.Component {
        ...

        onSubmit(e) {
            e.preventDefault();
            const user = {
                fname: this.state.fname,
                lname: this.state.lname,
                username: this.state.username,
                password: bcrypt.hashSync(this.state.password, bcrypt.genSalt(10))
            }
            ...
        }
    }
```

##### 失败注册例子
注册不能成功只源于用户提供的质询不足，返还``status: 400``。

### 登录
```js
    // ./server/routes/users.js
    const jwt = require('jsonwebtoken');
    const TOKEN_SECRET = Token应用码

    router.route("/login").post(async (req, res) => {
        await User.findOne({ username: req.body.username }).then(user => {
            if (!user) {
                res.status(204);
            } else {
                bycrypt.compare(req.body.password, user.pwd).then(match => (match ？ res.sendStatus(200) : res.sendStatus(204)));

                const token = jwt.sign({ _id: user._id }, TOKEN_SECRET);
                res.header("auth-header", token);
                res.json({ success: true, message: "Logged In"});
            }
        });
    });
```
当用户发出登录请求时，系统将从搜索数据库里相应的用户名。若用户名存在数据库里，系统将会应用``bcrypt``解析数据库里的用户密码并与用户输入的密码进行对比，密码一致将成功，否者失败。

##### 登录成功例子
```json
    {
        header: {
            auth-header: jwt-token
        },
        status: 200
    }

    // 用户发出请求
    {
        "username": "tim",
        "pwd": "tim"
    }
    // MongoDB 数据存档相应用户名
    {
        "_id":{"$oid":"5e68e6404f907236b0cfdc1f"},
        "fname":"Timothy","lname":"Goh",
        "username":"tim",
        "pwd":"$2a$10$yCPFUMcPscB5jgxzy5r/kOmG3zqGOxOEiKJuYPm3Hp9HM7/QcUkU6",
        "createdAt":{"$date":{"$numberLong":"1583932992922"}},
        "updatedAt":{"$date":{"$numberLong":"1583932992922"}}
    }
```

##### 登录失败例子
登录失败只源于用户名不存在或密码错误，返还``status: 204``。

## 贴文

### 贴文说明
每创建或更新一个贴文，该步骤都会进行用户验证，验证成功才可更新状态。验证所应用的部件是 <a href="https://www.jsonwebtoken.io" target="_blank">JSON Web Token (JWT)</a>。验证步骤将会是从Headers中的``auth-header``中获得用户登录资料。若``auth-header``为空，系统将会提示通知用户更新失败并要求进行登录。
```js
    // ./server/routes/verifyToken.js

    const jwt = require("jsonwebtoken");

    module.exports = function (req, res, next) {
        const token = req.header("auth-header");
        const TOKEN_SECRET = Token应用码
        if (!token) return res.status(401).send('Access Denied');
        try {
            const verified = jwt.verify(token, TOKEN_SECRET);
            req.user = verified;
            next();
        } catch(err) {
            res.status(400).send('Invalid token');
        }
    }
```

### 创建贴文
```js
    // ./server/routes/feed.js

    const verify = require("./verifyToken");

    router.post("/add", verify, async (req, res) => {
        const feed = new Feed({
            user: req.user._id,
            content: req.body.content
        });
        try {
            const savedFeed = await feed.save();
            const savedFeedWithUserData = await Feed.findById(savedFeed._id).populate("user");
            res.send(savedFeedWithUserData);
        } catch (err) {
            res.sendStatus(400);
        }
    });
```

##### 发布贴文成功
```json
    {
        "header":{
            "auth-header": jwt_token
        }
    }

    // 用户发出创建贴文请求
    {
        "content": "Stay 127.0.0.1, don't go 255.255.255.255"
    }

    // MongoDB 数据库存档
    {
        "_id":{"$oid":"5e8c2d690630f203e8dd47b4"},
        "upvote":{"$numberInt":"0"},
        "downvote":{"$numberInt":"0"},
        "user":{"$oid":"5e68e6404f907236b0cfdc1f"},
        "content":"Stay 127.0.0.1, don't go 255.255.255.255",
        "createdAt":{"$date":{"$numberLong":"1586244969523"}},
        "updatedAt":{"$date":{"$numberLong":"1586244969523"}}
    }

```

##### 贴文发布失败
+ 贴文发布失败的理由如：
    + 用户未登录
    + 贴文内容为空

### 点赞/给差评
```js
    // ./server/routes/feed.js

    const verify = require("./verifyToken");

    router.put("/updatee", verify, async (req, res) => {
        try{
            await Feed.findByIdAndUpdate(req.body._id, {
                upvote: req.body.upvote,
                downvote: req.body.downvote
            });
            res.send({"success": true});
        } catch { req.sendStatus(400); }
    });
```

##### 用户回应成功
```json
    {
        "header": {
            "auth-header": jwt_token
        }
    }

    {
        "_id":{"$oid":"5e6b40c984ee6f5f87b42a04"},
        "user":[{"$oid":"5e69ddb836ddf517d8f1e120"}],
        "upvote":{"$numberInt":"0"},
        "downvote":{"$numberInt":"1"},
        "content":"testing the latest release",
        "createdAt":{"$date":{"$numberLong":"1584087241899"}},
        "updatedAt":{"$date":{"$numberLong":"1584087301497"}}
    }
```

##### 用户回应失败
+ 用户给与回应失败的理由如：
    + 用户未登录
    + 用户在自己的贴问下给回应
    