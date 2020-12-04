# -- Add docker app ... <%=@serverName %> --

cd <%=@dockerSettingPath %>

docker build -f <%=@dockerFile %> -t <%=@siteImage %> .

docker container stop <%=@siteContainer %>

docker container rm <%=@siteContainer %>

docker run -d <%=@cmdPorts  %> -v "<%=@dockerCodePath%>":/var/_localApp -v "<%=@dockerDataPath%>":/var/lib/mysql  --network network_easydocker --name <%=@siteContainer %>  <%=@siteImage %> 

#-e MYSQL_ROOT_PASSWORD=54666  
