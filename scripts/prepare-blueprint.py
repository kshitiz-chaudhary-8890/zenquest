from pathlib import Path
from html import unescape
from urllib.parse import quote
import re, json

root=Path(__file__).resolve().parents[1]
raw=(root/'original-blueprint.html').read_text(encoding='utf-8-sig')
start=raw.index('<div data-elementor-type="wp-page"')
end=raw.index('<div data-elementor-type="footer"',start)
body=raw[start:end].strip()
# Remove the old booking calendar section, which embeds a production payment flow.
body=body[:body.index('<section class="elementor-section elementor-top-section elementor-element elementor-element-dc38e8f')].rstrip()+'</div>'
body=re.sub(r'\(USD\s*\d+\)', '', body)
body=re.sub(r'\s+srcset="[^"]*"','',body)
body=re.sub(r'\s+sizes="[^"]*"','',body)
body=re.sub(r'<script\b[^>]*>.*?</script>','',body,flags=re.S)
body=re.sub(r'<link\b[^>]*>','',body)
body=re.sub(r'\s+on\w+="[^"]*"','',body)
body=body.replace('https://thezenquestbypooja.com/wp-content/uploads/2022/09/IMG_1351-scaled-e1664030683543.jpg','/images/relationship.jpg')
names=iter(['Relationship Blueprint — 30-minute session','Relationship Blueprint — 60-minute session','Relationship Blueprint — four-session package'])
def booking(m):
 name=next(names)
 url='https://wa.me/919650093836?text='+quote(f'Hello, I would like to enquire about the {name}. Please share the fees and availability.')
 return f'href="{url}" target="_blank" rel="noopener noreferrer"'
body=re.sub(r'href="https://thezenquestbypooja.com/book-a-reading-with-pooja/"',booking,body)
body=body.replace('alt="" src=', 'alt="Pooja Khera" src=')
(root/'src/lib/blueprint.json').write_text(json.dumps({'html':body},ensure_ascii=False),encoding='utf-8')
out=root/'public/blueprint'
out.mkdir(exist_ok=True)
css=(root/'research/blueprint.css').read_text(encoding='utf-8-sig')
for url in re.findall(r'url\([\'"]?(https[^)\'" ]+)',css):
 css=css.replace(url,'/blueprint/'+url.split('/')[-1])
(out/'original.css').write_text(css,encoding='utf-8')
(out/'global.css').write_text((root/'research/global.css').read_text(encoding='utf-8-sig'),encoding='utf-8')
print('Preserved Blueprint body; removed three prices and legacy booking calendar.')
