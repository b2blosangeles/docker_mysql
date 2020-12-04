# -- Add docker app ... <%=@serverName %> --

cd <%=@dockerSettingPath %>

docker build -f <%=@dockerFile %> -t <%=@siteImage %> .

docker container stop <%=@siteContainer %>

docker container rm <%=@siteContainer %>

docker run -d --env MYSQL_USER=jxu --env MYSQL_PASSWORD=1234 -e MYSQL_ROOT_PASSWORD=<%=@randomKey%> <%=@cmdPorts%> -v "<%=@dockerCodePath%>":/var/_localApp -v "<%=@dockerDataPath%>":/var/lib/mysql  --network network_easydocker --name <%=@siteContainer %>  <%=@siteImage %> 
