#!/bin/bash
cp *_damemifactura.sh damemifactura/
rm damemifactura/*.*~
cd damemifactura
git add -A
git commit -a -m "pruebo la base firebase"
git push -u origin master
