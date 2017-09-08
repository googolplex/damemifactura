#!/bin/bash
cp ../*_damemifactura.sh damemifactura/
# borro la llave
rm ./llave/*
# borro la basura
rm /*.*~
# cd damemifactura
git add -A
git commit -a -m "ejemplo listo para la clase"
git push -u origin master

# repongo la llave
cp ../damelafactura*.json llave/
