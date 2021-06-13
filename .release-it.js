module.exports = {
  "github": {
    "push": false
  },
	"npm": {
    "publish": false,
    "publishPath": "dist"
	},
	"hooks": {
    // "before:init": ["npm run lint", "npm test"],
    // "after:my-plugin:bump": "./bin/my-script.sh",
    "after:bump": "yarn build:components",
    "after:git:release": "echo After git push, before github release",
    "after:release": "echo Successfully released ${name} v${version} to ${repo.repository}."
  },
  "git": {
    "commitMessage": "chore: release v${version}",
    "requireCleanWorkingDir": false
  },
  "plugins": {
    "@release-it/bumper": {
      "in": "./packages/core/package.json",
      "out": "./packages/core/package.json"
    }
  }
}