# www.explizit.org
Explizit song archive

### ANSI ART today

Covert the beautiful ANSI art:

```
iconv -f CP438 -t utf8 < FILE_ID.DIZ
```

Produce an acceptible output with **find**:

```
find /some/folder/* -printf '%f/%s/(%s bytes)/%TY-%Tm-%Td %TH:%TM:%.2TS %TZ\n' | numfmt -d/ --field=2 --to=iec | column -t -s/
```

Print file checksums:

```
sha256sum --tag /some/folder/*
```
