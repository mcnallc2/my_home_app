
#!/bin/bash
echo '## Kicking off my_home_app! ##\n'
gnome-terminal --title="fetcher" --command="node ./fetcher/fetcher.js" &
gnome-terminal --title="covid" --command="node ./covid/covid.js" &
gnome-terminal --title="weather" --command="node ./weather/weather.js" &