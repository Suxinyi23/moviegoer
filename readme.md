## <center>网络创新实验期末报告</center>

#### <p align="right" >16307130322 苏心怡</p>

### 项目名称

项目名称是Moviegoer，是面向喜欢看电影受众的交友平台，用户可以通过这个App分享对电影话题的相关看法，以及分享一些观影动态。

### 项目介绍

#### 1. 简介项目功能、用途及设计思想

​	项目是面对喜欢看电影的受众的交友平台。主要分为四个模块，分别为登录注册模块，论坛模块，动态模块，消息通知模块。在登录注册模块，用户可以登陆或注册个人账号，登陆之后可以修改个人信息，以及修改头像。用户可以在论坛模块发布有关电影的问题，也可以回答其他用户发布的问题。如果遇到志同道合的小伙伴，可以在论坛模块关注发帖或者回答问题的用户，从而在动态模块中与之互动。在动态模块中，用户可以浏览自己关注的用户发布的动态并点赞评论，发布新的动态，以及浏览自己发布的动态。最后是消息提醒模块，用户可以在此模块中看到其他用户对自己动态的点赞和评论。

#### 2. 项目的总体设计（框图）

项目的前端采用了ionic混合开发框架。Ionic 框架是混合应用程序开发的一种开源 SDK。它构建于 Angular.js 和 Apache Cordova 之上，提供移动应用工具和服务，使用 CSS、HTML 5 和 Sass 等 Web 技术，来开发混合 APP 应用程序。

项目的后端分为两个部分，一部分通过Bmob后端云实现，主要用来存储7张数据表；另一部分通过tomcat实现的图片服务器，主要用来存储图片，包括用户的头像以及用户动态中的图片。

![](/Users/xinsu/Desktop/网络创新实验报告/前后端分离.png)

#### 4. 项目的效果介绍（截图等）

- 登陆注册模块

  点击页面下方tabs中的Login即来到登录注册模块。登陆模块主要包含登录、注册、修改个人信息以及修改头像这四个主要功能。

  <figure class="three">
    <img src="/Users/xinsu/Desktop/网络创新实验报告/未登陆.png" style="zoom:21%; " /><img src="/Users/xinsu/Desktop/网络创新实验报告/登陆.png" style="zoom:21%; " /><img src="/Users/xinsu/Desktop/网络创新实验报告/注册.png" style="zoom:21%; " />
  </figure>

  

  以上是登陆注册模块的界面，其中注册模块，检查手机号格式的正确性，并且判断两次输入的密码是否一致。此外，后端云还会检查邮箱以及手机号是否与其他用户重复，防止同一个用户用相同的信息注册多个账号。

  登陆成功之后，用户就能在登陆页面看到自己的用户名和头像，点击白色的信息框即进入信息修改界面。	

  <figure class="three">
    <img src="/Users/xinsu/Desktop/网络创新实验报告/登陆成功.png" style="zoom:21%; " /><img src="/Users/xinsu/Desktop/网络创新实验报告/信息无变化.png" style="zoom:21%; " /><img src="/Users/xinsu/Desktop/网络创新实验报告/修改成功.png" style="zoom:21%; " />
  </figure>

  在修改信息界面可以进行个人信息的修改，包括用户名，电子邮箱地址，以及手机号码。点击save即可在bmob后端云中更新相应的信息，前端检测点击save时和用户之前的信息相比是否有变化，如果没有变化则通过消息提示框显示消息与之前相比没有变化，否则显示更新成功，并跳转到登陆成功的界面。

  在信息修改界面点击modify avatar即进入修改头像界面。

  <figure class="half">
    <img src="/Users/xinsu/Desktop/网络创新实验报告/修改头像.png" style="zoom:21%; " /><img src="/Users/xinsu/Desktop/网络创新实验报告/修改头像成功.png" style="zoom:21%; " />
  </figure>

  选择图片文件并上传，返回头像修改界面即可看到头像已经修改成功。



- 论坛模块

  点击页面下方tabs中的Home即来到论坛模块。论坛模块主要包括搜索帖子，发布帖子，回答帖子，以及关注感兴趣的人几个功能。

  <figure class="three">
    <img src="/Users/xinsu/Desktop/网络创新实验报告/论坛.png" style="zoom:21%; " /><img src="/Users/xinsu/Desktop/网络创新实验报告/搜索.png" style="zoom:21%; " /><img src="/Users/xinsu/Desktop/网络创新实验报告/提问.png" style="zoom:21%; " />
  </figure>

  主页显示的是所有用户所发布的帖子，可以利用页面上方的搜索框对所有帖子进行搜索，可以分别对帖子的问题，Tag，以及提问者进行搜索。如上图第二张，在搜索框中输入搜索内容并点击Questioner即可搜索用户sxy所发布的帖子。

  点击右下角的蓝色圆形新建按钮，可以发布帖子，需要对帖子（问题）的标题，内容，以及Tag进行描述。发布成功后，新建的帖子就会出现在主页面。

  点击其中的一个帖子就进入了问答页面。

  <figure class="half">
    <img src="/Users/xinsu/Desktop/网络创新实验报告/问答.jpg" style="zoom:21%; " /><img src="/Users/xinsu/Desktop/网络创新实验报告/回答.png" style="zoom:21%; " />
  </figure>

  点击蓝色的按钮“回答”即可回答问题，如上图所示，回答中会显示回答问题的时间。

  在问答页面还可以通过关注/取消关注按钮来选择是否关注提问者和问题回答者，这是为了在动态模块中看到自己关注的人发布的动态。

  <figure class="half">
    <img src="/Users/xinsu/Desktop/网络创新实验报告/点击关注.png" style="zoom:21%; " /><img src="/Users/xinsu/Desktop/网络创新实验报告/点击取消关注.png" style="zoom:21%; " />
  </figure>

  如上图，表示关注和取消关注提问者，关注之后按钮上的文字变成了取消关注；取关之后按钮上的文字变成了关注。可以对问题回答者做类似的操作。

  

- 动态模块

  动态模块主要包括三个功能，浏览好友动态（即自己以及所有自己关注的用户的动态），浏览自己的动态，以及创建新的动态。在浏览动态时，可以进行评论和点赞。

  <figure >
    <img src="/Users/xinsu/Desktop/网络创新实验报告/动态主页.png" style="zoom:21%; " /></figure>

  首先是浏览别人的动态，点击My Friends按钮即可进入。朋友圈的展示方式采用滑动方式。点击右下角的蓝色圆形新建按钮可以进行评论。

  <figure class="half">
    <img src="/Users/xinsu/Desktop/网络创新实验报告/朋友圈.png" style="zoom:21%; " /><img src="/Users/xinsu/Desktop/网络创新实验报告/评论.png" style="zoom:21%; " />
  </figure>

  也可以对动态点赞，点赞之后爱心会变为红色，否则是黑色，点赞的数量也会随之变化。

  <figure class="half">
    <img src="/Users/xinsu/Desktop/网络创新实验报告/未点赞.png" style="zoom:21%; " /><img src="/Users/xinsu/Desktop/网络创新实验报告/点赞.png" style="zoom:21%; " />
  </figure>

  还可以查看自己发布的动态，因为自己发布的动态的发布者都是自己，因此在My Moments中不显示动态的头像和用户名。

  <figure >
    <img src="/Users/xinsu/Desktop/网络创新实验报告/我的动态.png" style="zoom:21%; " /><img src="/Users/xinsu/Desktop/网络创新实验报告/个人动态.png" style="zoom:21%; " />
  </figure>

  此外，用户可以发布新的动态，在最上方的文本框内输入动态的文字内容，再放选择至多三张图片，每次选择一张图片后点击Ok按钮加入下一章图片（当然也可以直接发表纯文字的朋友圈）。

  <figure >
    <img src="/Users/xinsu/Desktop/网络创新实验报告/发表图片动态.png" style="zoom:21%; " /><img src="/Users/xinsu/Desktop/网络创新实验报告/发布文字动态.png" style="zoom:21%; " />
  </figure>

- 消息模块

  消息模块用来通知别的用户对我发表的动态的通知和点赞情况。

  <figure >
    <img src="/Users/xinsu/Desktop/网络创新实验报告/通知.png" style="zoom:21%; " /><img src="/Users/xinsu/Desktop/网络创新实验报告/点赞通知.png" style="zoom:21%; " /><img src="/Users/xinsu/Desktop/网络创新实验报告/评论通知.png" style="zoom:21%; " />
  </figure>

  小红点表示未读，没有小红点表示已读。点击任何一条消息可以定位到被点赞或者评论的动态，返回之后小红点会消失，以下以一条评论消息（用户wy评论的：喜欢快银小天使！）为例：

  <figure >
    <img src="/Users/xinsu/Desktop/网络创新实验报告/评论通知.png" style="zoom:21%; " /><img src="/Users/xinsu/Desktop/网络创新实验报告/读评论.png" style="zoom:21%; " /><img src="/Users/xinsu/Desktop/网络创新实验报告/评论已读.png" style="zoom:21%; " />
  </figure>

  

####  5. 介绍源文件怎么编译/安装/部署成可以demo的系统

- 首先是ionic前端部分，可以直接在Webstorm中打开并在命令行中输入ionic serve指令，项目就可以在浏览器中运行

- [Bmob后端云](https://www.bmob.cn/)是不间断的服务器，不需要人为开启。

- Tomcat图片服务器，需要在本地安装[Tomcat](http://tomcat.apache.org/)，为tomcat设置图片上传的物理路径和虚拟地址之前的映射，并且在Intellij Idea Ultimate中启动Image Server项目。我参考了一篇[csdn博客](https://blog.csdn.net/pan_junbiao/article/details/89639004)来部署我的tomcat项目。

  其中虚拟路径的设置，只需要简单改动tomcat总conf文件夹中的server.xml 文件，找到Host中的Context并改成如下的映射方法：

  ```xml
        <Host name="localhost"  appBase="webapps"
              unpackWARs="true" autoDeploy="true">
  
          <!-- SingleSignOn valve, share authentication between web applications
               Documentation at: /docs/config/valve.html -->
          <!--
          <Valve className="org.apache.catalina.authenticator.SingleSignOn" />
          -->
  
          <!-- Access log processes all example.
               Documentation at: /docs/config/valve.html
               Note: The pattern used is equivalent to using pattern="common" -->
          <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"
                 prefix="localhost_access_log" suffix=".txt"
                 pattern="%h %l %u %t &quot;%r&quot; %s %b" />
  
                 <Context path="/photo" docBase="本地路径" reloadable="true" />
  
        </Host>
  ```

  本地路径应更换为图片在计算机中存储的物理地址，随后可在"http://localhost:8080/photo/filename.png"中访问图片文件夹中的filename.jpg文件。



### 难点与解决技术

#### 1. 图片格式转换

- 获取并显示图片

  通过Tomcat中图片的虚拟路径（例如：http://localhost:8080/photo/filename.png）获取ArrayBuffer格式的图片之后，需要将图片转化为 Base64 String从而在前端显示出来，此外，如果直接转化为Base64 String，如

  ```typescript
  this.http.get(url,{responseType:  'arraybuffer'}).subscribe((ab) => {
  		var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));
      var imgData='data:image/jpeg;base64,'+ base64String;
      this.photo[j]=imgData;
    });
  ```

  这种方式面临的问题是，当ArrayBuffer比较大， 则在浏览器中打开项目时候会出现`“maximum call stack size exceeded error”`，即会导致栈溢出。

  因此，采用reduce方法，分批处理大的arraybuffer，从而避免栈溢出问题。

  ```typescript
  this.http.get(url,{responseType:  'arraybuffer'}).subscribe((ab) => {
    	var base64String= btoa([].reduce.call(new Uint8Array(ab),function(p,c){return p+String.fromCharCode(c)},''))
      var imgData='data:image/jpeg;base64,'+ base64String;
      this.photo[j]=imgData;
    });
  ```

  在获取了通过arraybuffer直接转换得到的base64string，来需要在前面加上`'data:image/jpeg;base64,'`，才能得到最后可以直接在前端显示的图片格式。

  

- 预览本地图片文件

  预览本地的图片文件和之前的图片处理模式也不一样，将其转化为base64String，用到了回调函数，通过html元素的id来改变前端显示的图片。

  回调函数：

  ```typescript
    blob2Base64 = function(blob, callback) {
      var reader = new FileReader();
      reader.onload = function() {
        var dataUrl = reader.result;
        var base64 = dataUrl.split(',')[1];
        callback(base64);
      };
      reader.readAsDataURL(blob);
    };
  ```

  主要是通过读文件流的方式从blob格式的图片中获取base64string，通过回调函数将base64格式的图片显示在html元素上。

  ```typescript
    loadImageFromDevice1(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
  
        let blob: Blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);
        this.blob2Base64(blob, function(base64String) {
        document.getElementById('show1')['src']='data:image/jpeg;base64,'+base64String});
  
      };
    };
  ```

  首先要从input元素中获取对应的文件，再通过回调函数将blob格式的文件转化为base64String。

#### 2. Tomcat+Bmob后端云存储图片

- Tomcat 图片服务器

  上传图片的代码如下：

  由于tomcat可以将图片映射到虚拟路径，因此获取图片之后只需要将图片写入虚拟路径对应的真实物理路径中（即写入硬盘中）即可。

  ```java
  protected void doPost(HttpServletRequest request,
                            HttpServletResponse response) throws ServletException, IOException {
          // 配置上传参数
          DiskFileItemFactory factory = new DiskFileItemFactory();
          // 设置内存临界值 - 超过后将产生临时文件并存储于临时目录中
          factory.setSizeThreshold(MEMORY_THRESHOLD);
          // 设置临时存储目录
          factory.setRepository(new File(System.getProperty("java.io.tmpdir")));
          ServletFileUpload upload = new ServletFileUpload(factory);
          // 设置最大文件上传值
          upload.setFileSizeMax(MAX_FILE_SIZE);
          // 设置最大请求值 (包含文件和表单数据)
          upload.setSizeMax(MAX_REQUEST_SIZE);
          // 中文处理
          upload.setHeaderEncoding("UTF-8");
          String uploadPath="/Users/xinsu/A_Courses/Web/PHOTOS";
          System.out.println(uploadPath);
  
          // 如果目录不存在则创建
          File uploadDir = new File(uploadPath);
          if (!uploadDir.exists()) {
              uploadDir.mkdir();
          }
  
          try {
              // 解析请求的内容提取文件数据
              @SuppressWarnings("unchecked")
              List<FileItem> formItems = upload.parseRequest(request);
              System.out.println(formItems);
  
              if (formItems != null && formItems.size() > 0) {
                  // 迭代表单数据
                  for (FileItem item : formItems) {
                      // 处理不在表单中的字段
                      if (!item.isFormField()) {
                          System.out.println("item: ");
                          System.out.println(item);
  
                          String fileName = new File(item.getName()).getName();
                          String filePath = uploadPath + File.separator + fileName;
                          File storeFile = new File(filePath);
                          // 在控制台输出文件的上传路径
                          System.out.println("filePath");
                          System.out.println(filePath);
                          // 保存文件到硬盘
                          item.write(storeFile);
                          request.setAttribute("message",
                                  "文件上传成功!");
                      }
                  }
              }
          } catch (Exception ex) {
              request.setAttribute("message",
                      "错误信息: " + ex.getMessage());
          }
  
      }
  ```

  

- Bmob后端云

  图片上传成功后，将图片的虚拟路径，即一个形如"http://localhost:8080/photo/filename.png"的字符串，作为url存储在Bmob后端云的数据库中。

#### 3. UI的设计和美化

UI的设计主要参考了ionic官网可以各种ionic教程。使用了包括ionic滑动框`<ion-slides>`实现动态的滑动，以及使用了angular中的`ngFor`来实现模版的重复，例如论坛中的发帖列表，以及回答列表，动态的滑动列表都用到了`ngFor`，此外，还需要考虑页面之前信息的传递，例如点击一个帖子进入其问答页面就需要传入帖子对应的id。

此外，还用到了一些ionic中的icon帮助美化界面，例如点赞中的心形，以及ionic专门用来存放头像的`ion-avatar`来存放头像。

还有一些细节处理，例如，在`src/directives/autosize`文件夹实现文本框的自适应大小，以适应用户不同的动态文字量需求。以及模仿微信，用消息的小红点表示是否已读。

### 工作量

- ionic前端工作量，使用CLOC（Count Lines of Code）进行代码行数的统计，有效的排除了空白行以及注释行数。

  ![image-20200703041212846](/Users/xinsu/Library/Application Support/typora-user-images/image-20200703041212846.png)



- Tomcat图片服务器，同样使用CLOC工具统计。

  ![image-20200703042228011](/Users/xinsu/Library/Application Support/typora-user-images/image-20200703042228011.png)





