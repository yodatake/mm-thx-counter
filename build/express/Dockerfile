# <http://postd.cc/lessons-building-node-app-docker/> 参考にしました。
FROM node:9.4.0-slim

# appユーザーでnodeを実行する
RUN useradd --user-group --create-home --shell /bin/false app

RUN npm install --global npm@4.0.3

ENV HOME=/home/app

# appユーザーで実行するために権限変更
COPY ./src/package.json ./src/npm-shrinkwrap.json $HOME/src/
# COPY ./src/package.json $HOME/src/
RUN chown -R app:app $HOME/*

USER app

WORKDIR $HOME/src

# install dependencies
RUN npm install

# インストール時、npmがダウンロードするtarファイルを消去
RUN npm cache clean

CMD ["npm", "start"]
