import re

with open('/home/faaripi/develop/loyal-duck-web/assets/styles.css', 'r') as f:
    css = f.read()

# Replace variables to match globals.css
css = css.replace('var(--canvas)', 'var(--color-canvas)')
css = css.replace('var(--ink)', 'var(--color-ink)')
css = css.replace('var(--cobalt)', 'var(--color-cobalt)')
css = css.replace('var(--cobalt-dark)', 'var(--color-cobalt-dark)')
css = css.replace('var(--gold)', 'var(--color-gold)')
css = css.replace('var(--paper)', 'var(--color-surface)')
css = css.replace('var(--muted)', 'var(--color-ink-muted)')
css = css.replace('var(--line)', 'var(--color-border-subtle)')
css = css.replace('var(--lavender)', 'var(--color-cobalt-soft)')
css = css.replace('var(--rose)', '#FFE4E9')
css = css.replace('var(--coral)', 'var(--color-coral)')
css = css.replace('var(--sans)', 'var(--font-sans)')

# Remove root and basic resets since Tailwind handles it
css = re.sub(r':root\s*\{[^}]*\}', '', css)
css = re.sub(r'\*,\*::before,\*::after\s*\{[^}]*\}', '', css)
css = re.sub(r'html\s*\{[^}]*\}', '', css)
css = re.sub(r'body\s*\{[^}]*\}', '', css)

# Scope general tags to .marketing-scope
css = re.sub(r'(?<![.\w-])(h1|h2|h3|p|a|button|input|summary)\s*\{', r'.marketing-scope \1 {', css)

with open('src/app/marketing.css', 'w') as f:
    f.write(css)

