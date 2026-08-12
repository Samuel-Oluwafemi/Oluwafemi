# Oluwafemi — Animation System

## Philosophy

Motion should communicate polish.

It should never make the portfolio difficult to use.

The animation style should feel:

- smooth
- restrained
- confident
- intentional

---

# PAGE LOAD

On initial load:

1. Navbar fades/slides into place.
2. Hero eyebrow appears.
3. Hero headline reveals.
4. Supporting copy appears.
5. CTAs appear.
6. Studio visual reveals.

Use staggered animation.

Avoid long loading sequences.

---

# HERO

Headline:

Small upward movement:

`y: 20 → 0`

Opacity:

`0 → 1`

Duration:

0.5–0.7s

---

# SECTION REVEALS

Sections can use:

Opacity:

`0 → 1`

Y:

`20 → 0`

Duration:

0.5–0.7s

Trigger once when entering viewport.

---

# PROJECT CARDS

On hover:

Image:

`scale(1 → 1.03)`

Duration:

0.5–0.7s

Project metadata can subtly shift.

Do not move the entire card dramatically.

---

# BUTTONS

Primary buttons should have subtle:

- background transition
- slight icon movement

Arrow icon:

`translateX(0 → 3px)`

---

# NAVBAR

On scroll:

Navbar can transition from:

transparent

to:

dark blurred surface

Do not make it jump.

---

# PAGE TRANSITIONS

If React Router is used, use a subtle opacity/translate transition.

Never use dramatic page wipes.

---

# TECH STACK

Icons can appear with subtle stagger.

Avoid spinning technology logos.

---

# PROJECT CASE STUDIES

Large project imagery may use:

opacity reveal

and subtle scale:

`0.98 → 1`

---

# REDUCED MOTION

Respect:

`prefers-reduced-motion`

When reduced motion is enabled:

- remove large movement
- remove parallax
- minimize transitions
- keep opacity changes subtle

---

# PERFORMANCE

Do not animate:

- huge DOM trees
- expensive filters
- unnecessary blur effects
- constant background effects

Prefer:

- transform
- opacity

---

# GOLDEN RULE

If removing an animation makes the website better, remove it.