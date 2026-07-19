# My T3 Code Fork

This is my personal fork of [T3 Code](https://github.com/pingdotgg/t3code). Full credit to the T3 team for building the thing I get to tinker with.

I'm building my own personal harness that I can shape around the way I like to work. In particular, projects as a way to group together sessions from different agent providers.

## Motivation

I created a skill to dispatch work much like sub-agents because I found that Cursor has an almost infinite capacity for coding, especially when using Composer.

Composer is so good at focused, small coding tasks as long as it's orchestrated by larger models for the overall guidance.

I quickly ended up with a bunch of different agents with different roles spread across providers. It became a bit of a nightmare.

This isn't unique to me. There are a ton of projects and even a few startups tackling this orchestration challenge.

It would probably be easier to have an unlimited budget for Claude and do it all there, or an insanely beefy machine that can run the most powerful open models locally.

But I have an almost nostalgic attachment to Cursor. It was such an excellent coding agent when I started working directly with code, especially code I care about, like the frontend of my personal site.

Orchestration is so token-expensive that I bounce between Claude and Codex every day. I keep expiring the five-hour usage windows and come close to expiring the full seven-day quotas.

Bouncing between the two gives me just enough horsepower to keep these projects going—but not if they're also doing all the coding.

Offloading the coding to Cursor is where I accidentally unlocked an unlimited building cheat code.

The lowest subscription tier across the three major providers is surprisingly cost-effective. It tapped into my scrappy mindset to milk it as far as I can. It's also been way too tempting to find out how much coding power is available if I can herd these cats.

## Why projects?

Right now, this is the simplest thing I can think of.

I'm a solo developer. I want to understand how sessions group together for projects.

Everything else I've seen feels overcomplicated for my current needs: Kanban boards, burndown rates, and setups trying to emulate tools like Linear for larger teams.

For now:

```text
Repository
└── Project
    ├── Claude sessions
    ├── Codex sessions
    ├── Cursor sessions
    └── Other sessions
```

Later, I might build my own lightweight project view around goals, documentation, branches, and next actions. Maybe a small Kanban view.

There are probably more levels after I wrap my head around organizing sessions by projects.

For now, I'm trying to herd the cats.

For the original project, visit [pingdotgg/t3code](https://github.com/pingdotgg/t3code).
