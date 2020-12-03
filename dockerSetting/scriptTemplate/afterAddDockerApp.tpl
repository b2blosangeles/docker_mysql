# docker logs <%=@siteContainer %> 2>&1 | grep 'GENERATED' | awk '{gsub(/^[^:]+: /,"")}1' > <%=@dockerCodePath%>/adminPass

docker logs <%=@siteContainer %> >> <%=@dockerCodePath%>/adminLog
