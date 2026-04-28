import re

with open(r'C:\Users\HP\OneDrive\Desktop\Digi\PortfolioBuilder\ai-portfolio-builder\app\Components\page.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace class= with className= but NOT inside xlink:href or similar
# Only replace HTML attribute class= (preceded by space or newline)
content = re.sub(r"(\s)class=", r"\1className=", content)

# Remove xmlns:xlink namespace (not valid in JSX)
content = content.replace('xmlns:xlink="http://www.w3.org/1999/xlink"', '')

# Replace xlink:href with href
content = content.replace('xlink:href=', 'href=')

with open(r'C:\Users\HP\OneDrive\Desktop\Digi\PortfolioBuilder\ai-portfolio-builder\app\Components\page.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done! Fixed class= -> className=, removed xmlns:xlink, replaced xlink:href")
