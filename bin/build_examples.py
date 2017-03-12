#!/usr/bin/python

import glob
import os.path
import re
import hashlib
from bs4 import BeautifulSoup
from subprocess import call, Popen, PIPE, STDOUT

root = "/home/alex/tidalcycles.github.io/_site/"
dnmatcher = re.compile(r'^\s*d[0-9]\s*(\$\s*)?')
crmatcherpre = re.compile(r'^[\s\n\r]*')
crmatcherpost = re.compile(r'[\s\n\r]*$')

outpath = "../patterns/"

for fn in glob.glob(os.path.join(root, "*.html")):
    soup = BeautifulSoup(open(fn), 'lxml')

    patterns = soup.find_all("div", "render")
    if len(patterns) > 0:
        print(fn + " (" + str(len(patterns)) +")")
        for pattern in patterns:
            code = pattern.get_text()
            code = crmatcherpre.sub('', code)
            code = crmatcherpost.sub('', code)
            print ">>" + code + "<<"
            digest = hashlib.md5(code).hexdigest()
            print "digest:" + digest
            outfn = outpath + digest + ".mp3"
            print "outfn: " + outfn

            if (not os.path.exists(outfn)):
                code = dnmatcher.sub('', code)
            
                p = Popen(["./runpattern", outfn], stdout=PIPE, stdin=PIPE, stderr=STDOUT)

                tidalout = p.communicate(input=code)[0]
                print(tidalout)
                if p.returncode == 0:
                    print "worked> " + outfn
                else:
                    print "did not work."

