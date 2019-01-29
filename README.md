# www.explizit.org
Explizit song archive

### ANSI ART today

Covert the beautiful ANSI art:

```
iconv -f CP438 -t utf8 < FILE_ID.DIZ
```

Produce the second panel's output with GNU `find`:

```
LC_ALL='en' \
  find $XPLPATH -type f \
    -printf '%f/%s/%s/%Te %TB %TY %TH:%TM:%.2TS %TZ/%TFT%TF%Tz\n' \
  | LC_ALL='en' numfmt -d/ --field=2 --to=iec \
  | column -t -s/
```


Print file checksums:

```
sha256sum --tag /some/folder/*
```
