import { r as registerInstance, h, e as Host, g as getElement } from './index-c6b590a1.js';

const buttonCss = ".CrossUIButton{cursor:pointer;border-style:solid;font-family:system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"}.CrossUIButton.blue{display:inline-flex;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;border-width:2px;border-color:transparent;line-height:1;font-size:0.875rem;line-height:1.25rem;padding-left:1rem;padding-right:1rem;--bg-opacity:1;background-color:#4299e1;background-color:rgba(66, 153, 225, var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255, 255, 255, var(--text-opacity));font-weight:600}.CrossUIButton.blue.small,.CrossUIButton.blue.medium,.CrossUIButton.blue.large{font-size:0.75rem;line-height:1rem;padding-left:1rem;padding-right:1rem}.CrossUIButton.blue.small.circle,.CrossUIButton.blue.small.square,.CrossUIButton.blue.medium.circle,.CrossUIButton.blue.medium.square,.CrossUIButton.blue.large.circle,.CrossUIButton.blue.large.square{align-items:center;justify-content:center;padding:0.25rem}.CrossUIButton.blue.small{height:1.5rem;font-size:0.75rem;line-height:1rem}.CrossUIButton.blue.small.circle,.CrossUIButton.blue.small.square{width:1.5rem}.CrossUIButton.blue.medium{height:2rem;font-size:0.875rem;line-height:1.25rem}.CrossUIButton.blue.medium.circle,.CrossUIButton.blue.medium.square{width:2rem}.CrossUIButton.blue.large{height:2.5rem;font-size:1rem;line-height:1.5rem}.CrossUIButton.blue.large.circle,.CrossUIButton.blue.large.square{width:2.5rem}.CrossUIButton.blue.simple{outline:2px solid transparent;outline-offset:2px;--bg-opacity:1;background-color:#4299e1;background-color:rgba(66, 153, 225, var(--bg-opacity))}.CrossUIButton.blue.simple:hover:not(:disabled){--bg-opacity:1;background-color:#3182ce;background-color:rgba(49, 130, 206, var(--bg-opacity))}.CrossUIButton.blue.simple:focus{--border-opacity:1;border-color:#2b6cb0;border-color:rgba(43, 108, 176, var(--border-opacity))}.CrossUIButton.blue.simple.pill,.CrossUIButton.blue.simple.circle{border-radius:9999px}.CrossUIButton.blue.outline{outline:2px solid transparent;outline-offset:2px;background-color:transparent;--text-opacity:1;color:#2b6cb0;color:rgba(43, 108, 176, var(--text-opacity));font-weight:600;border-width:1px;--border-opacity:1;border-color:#4299e1;border-color:rgba(66, 153, 225, var(--border-opacity))}.CrossUIButton.blue.outline:hover:not(:disabled){--bg-opacity:1;background-color:#3182ce;background-color:rgba(49, 130, 206, var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255, 255, 255, var(--text-opacity));border-color:transparent}.CrossUIButton.blue.outline:focus{--border-opacity:1;border-color:#2b6cb0;border-color:rgba(43, 108, 176, var(--border-opacity))}.CrossUIButton.blue.outline.pill,.CrossUIButton.blue.outline.circle{border-radius:9999px}.CrossUIButton.blue.elevated{outline:2px solid transparent;outline-offset:2px;--bg-opacity:1;background-color:#fff;background-color:rgba(255, 255, 255, var(--bg-opacity));--text-opacity:1;color:#2d3748;color:rgba(45, 55, 72, var(--text-opacity));font-weight:600;border-width:1px;--border-opacity:1;border-color:#cbd5e0;border-color:rgba(203, 213, 224, var(--border-opacity));box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)}.CrossUIButton.blue.elevated:focus:not(:disabled),.CrossUIButton.blue.elevated:hover:not(:disabled){--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247, 250, 252, var(--bg-opacity))}.CrossUIButton.blue.elevated.pill,.CrossUIButton.blue.elevated.circle{border-radius:9999px}.CrossUIButton.blue:disabled{opacity:0.5;cursor:not-allowed}.CrossUIButton.blue:disabled.pill,.CrossUIButton.blue:disabled.circle{border-radius:9999px}.CrossUIButton.red{display:inline-flex;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;border-width:2px;border-color:transparent;line-height:1;font-size:0.875rem;line-height:1.25rem;padding-left:1rem;padding-right:1rem;--bg-opacity:1;background-color:#f56565;background-color:rgba(245, 101, 101, var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255, 255, 255, var(--text-opacity));font-weight:600}.CrossUIButton.red.small,.CrossUIButton.red.medium,.CrossUIButton.red.large{font-size:0.75rem;line-height:1rem;padding-left:1rem;padding-right:1rem}.CrossUIButton.red.small.circle,.CrossUIButton.red.small.square,.CrossUIButton.red.medium.circle,.CrossUIButton.red.medium.square,.CrossUIButton.red.large.circle,.CrossUIButton.red.large.square{align-items:center;justify-content:center;padding:0.25rem}.CrossUIButton.red.small{height:1.5rem;font-size:0.75rem;line-height:1rem}.CrossUIButton.red.small.circle,.CrossUIButton.red.small.square{width:1.5rem}.CrossUIButton.red.medium{height:2rem;font-size:0.875rem;line-height:1.25rem}.CrossUIButton.red.medium.circle,.CrossUIButton.red.medium.square{width:2rem}.CrossUIButton.red.large{height:2.5rem;font-size:1rem;line-height:1.5rem}.CrossUIButton.red.large.circle,.CrossUIButton.red.large.square{width:2.5rem}.CrossUIButton.red.simple{outline:2px solid transparent;outline-offset:2px;--bg-opacity:1;background-color:#f56565;background-color:rgba(245, 101, 101, var(--bg-opacity))}.CrossUIButton.red.simple:hover:not(:disabled){--bg-opacity:1;background-color:#e53e3e;background-color:rgba(229, 62, 62, var(--bg-opacity))}.CrossUIButton.red.simple:focus{--border-opacity:1;border-color:#c53030;border-color:rgba(197, 48, 48, var(--border-opacity))}.CrossUIButton.red.simple.pill,.CrossUIButton.red.simple.circle{border-radius:9999px}.CrossUIButton.red.outline{outline:2px solid transparent;outline-offset:2px;background-color:transparent;--text-opacity:1;color:#c53030;color:rgba(197, 48, 48, var(--text-opacity));font-weight:600;border-width:1px;--border-opacity:1;border-color:#f56565;border-color:rgba(245, 101, 101, var(--border-opacity))}.CrossUIButton.red.outline:hover:not(:disabled){--bg-opacity:1;background-color:#e53e3e;background-color:rgba(229, 62, 62, var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255, 255, 255, var(--text-opacity));border-color:transparent}.CrossUIButton.red.outline:focus{--border-opacity:1;border-color:#c53030;border-color:rgba(197, 48, 48, var(--border-opacity))}.CrossUIButton.red.outline.pill,.CrossUIButton.red.outline.circle{border-radius:9999px}.CrossUIButton.red.elevated{outline:2px solid transparent;outline-offset:2px;--bg-opacity:1;background-color:#fff;background-color:rgba(255, 255, 255, var(--bg-opacity));--text-opacity:1;color:#2d3748;color:rgba(45, 55, 72, var(--text-opacity));font-weight:600;border-width:1px;--border-opacity:1;border-color:#cbd5e0;border-color:rgba(203, 213, 224, var(--border-opacity));box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)}.CrossUIButton.red.elevated:focus:not(:disabled),.CrossUIButton.red.elevated:hover:not(:disabled){--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247, 250, 252, var(--bg-opacity))}.CrossUIButton.red.elevated.pill,.CrossUIButton.red.elevated.circle{border-radius:9999px}.CrossUIButton.red:disabled{opacity:0.5;cursor:not-allowed}.CrossUIButton.red:disabled.pill,.CrossUIButton.red:disabled.circle{border-radius:9999px}.CrossUIButton.orange{display:inline-flex;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;border-width:2px;border-color:transparent;line-height:1;font-size:0.875rem;line-height:1.25rem;padding-left:1rem;padding-right:1rem;--bg-opacity:1;background-color:#ed8936;background-color:rgba(237, 137, 54, var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255, 255, 255, var(--text-opacity));font-weight:600}.CrossUIButton.orange.small,.CrossUIButton.orange.medium,.CrossUIButton.orange.large{font-size:0.75rem;line-height:1rem;padding-left:1rem;padding-right:1rem}.CrossUIButton.orange.small.circle,.CrossUIButton.orange.small.square,.CrossUIButton.orange.medium.circle,.CrossUIButton.orange.medium.square,.CrossUIButton.orange.large.circle,.CrossUIButton.orange.large.square{align-items:center;justify-content:center;padding:0.25rem}.CrossUIButton.orange.small{height:1.5rem;font-size:0.75rem;line-height:1rem}.CrossUIButton.orange.small.circle,.CrossUIButton.orange.small.square{width:1.5rem}.CrossUIButton.orange.medium{height:2rem;font-size:0.875rem;line-height:1.25rem}.CrossUIButton.orange.medium.circle,.CrossUIButton.orange.medium.square{width:2rem}.CrossUIButton.orange.large{height:2.5rem;font-size:1rem;line-height:1.5rem}.CrossUIButton.orange.large.circle,.CrossUIButton.orange.large.square{width:2.5rem}.CrossUIButton.orange.simple{outline:2px solid transparent;outline-offset:2px;--bg-opacity:1;background-color:#ed8936;background-color:rgba(237, 137, 54, var(--bg-opacity))}.CrossUIButton.orange.simple:hover:not(:disabled){--bg-opacity:1;background-color:#dd6b20;background-color:rgba(221, 107, 32, var(--bg-opacity))}.CrossUIButton.orange.simple:focus{--border-opacity:1;border-color:#c05621;border-color:rgba(192, 86, 33, var(--border-opacity))}.CrossUIButton.orange.simple.pill,.CrossUIButton.orange.simple.circle{border-radius:9999px}.CrossUIButton.orange.outline{outline:2px solid transparent;outline-offset:2px;background-color:transparent;--text-opacity:1;color:#c05621;color:rgba(192, 86, 33, var(--text-opacity));font-weight:600;border-width:1px;--border-opacity:1;border-color:#ed8936;border-color:rgba(237, 137, 54, var(--border-opacity))}.CrossUIButton.orange.outline:hover:not(:disabled){--bg-opacity:1;background-color:#dd6b20;background-color:rgba(221, 107, 32, var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255, 255, 255, var(--text-opacity));border-color:transparent}.CrossUIButton.orange.outline:focus{--border-opacity:1;border-color:#c05621;border-color:rgba(192, 86, 33, var(--border-opacity))}.CrossUIButton.orange.outline.pill,.CrossUIButton.orange.outline.circle{border-radius:9999px}.CrossUIButton.orange.elevated{outline:2px solid transparent;outline-offset:2px;--bg-opacity:1;background-color:#fff;background-color:rgba(255, 255, 255, var(--bg-opacity));--text-opacity:1;color:#2d3748;color:rgba(45, 55, 72, var(--text-opacity));font-weight:600;border-width:1px;--border-opacity:1;border-color:#cbd5e0;border-color:rgba(203, 213, 224, var(--border-opacity));box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)}.CrossUIButton.orange.elevated:focus:not(:disabled),.CrossUIButton.orange.elevated:hover:not(:disabled){--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247, 250, 252, var(--bg-opacity))}.CrossUIButton.orange.elevated.pill,.CrossUIButton.orange.elevated.circle{border-radius:9999px}.CrossUIButton.orange:disabled{opacity:0.5;cursor:not-allowed}.CrossUIButton.orange:disabled.pill,.CrossUIButton.orange:disabled.circle{border-radius:9999px}.CrossUIButton.green{display:inline-flex;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;border-width:2px;border-color:transparent;line-height:1;font-size:0.875rem;line-height:1.25rem;padding-left:1rem;padding-right:1rem;--bg-opacity:1;background-color:#48bb78;background-color:rgba(72, 187, 120, var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255, 255, 255, var(--text-opacity));font-weight:600}.CrossUIButton.green.small,.CrossUIButton.green.medium,.CrossUIButton.green.large{font-size:0.75rem;line-height:1rem;padding-left:1rem;padding-right:1rem}.CrossUIButton.green.small.circle,.CrossUIButton.green.small.square,.CrossUIButton.green.medium.circle,.CrossUIButton.green.medium.square,.CrossUIButton.green.large.circle,.CrossUIButton.green.large.square{align-items:center;justify-content:center;padding:0.25rem}.CrossUIButton.green.small{height:1.5rem;font-size:0.75rem;line-height:1rem}.CrossUIButton.green.small.circle,.CrossUIButton.green.small.square{width:1.5rem}.CrossUIButton.green.medium{height:2rem;font-size:0.875rem;line-height:1.25rem}.CrossUIButton.green.medium.circle,.CrossUIButton.green.medium.square{width:2rem}.CrossUIButton.green.large{height:2.5rem;font-size:1rem;line-height:1.5rem}.CrossUIButton.green.large.circle,.CrossUIButton.green.large.square{width:2.5rem}.CrossUIButton.green.simple{outline:2px solid transparent;outline-offset:2px;--bg-opacity:1;background-color:#48bb78;background-color:rgba(72, 187, 120, var(--bg-opacity))}.CrossUIButton.green.simple:hover:not(:disabled){--bg-opacity:1;background-color:#38a169;background-color:rgba(56, 161, 105, var(--bg-opacity))}.CrossUIButton.green.simple:focus{--border-opacity:1;border-color:#2f855a;border-color:rgba(47, 133, 90, var(--border-opacity))}.CrossUIButton.green.simple.pill,.CrossUIButton.green.simple.circle{border-radius:9999px}.CrossUIButton.green.outline{outline:2px solid transparent;outline-offset:2px;background-color:transparent;--text-opacity:1;color:#2f855a;color:rgba(47, 133, 90, var(--text-opacity));font-weight:600;border-width:1px;--border-opacity:1;border-color:#48bb78;border-color:rgba(72, 187, 120, var(--border-opacity))}.CrossUIButton.green.outline:hover:not(:disabled){--bg-opacity:1;background-color:#38a169;background-color:rgba(56, 161, 105, var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255, 255, 255, var(--text-opacity));border-color:transparent}.CrossUIButton.green.outline:focus{--border-opacity:1;border-color:#2f855a;border-color:rgba(47, 133, 90, var(--border-opacity))}.CrossUIButton.green.outline.pill,.CrossUIButton.green.outline.circle{border-radius:9999px}.CrossUIButton.green.elevated{outline:2px solid transparent;outline-offset:2px;--bg-opacity:1;background-color:#fff;background-color:rgba(255, 255, 255, var(--bg-opacity));--text-opacity:1;color:#2d3748;color:rgba(45, 55, 72, var(--text-opacity));font-weight:600;border-width:1px;--border-opacity:1;border-color:#cbd5e0;border-color:rgba(203, 213, 224, var(--border-opacity));box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)}.CrossUIButton.green.elevated:focus:not(:disabled),.CrossUIButton.green.elevated:hover:not(:disabled){--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247, 250, 252, var(--bg-opacity))}.CrossUIButton.green.elevated.pill,.CrossUIButton.green.elevated.circle{border-radius:9999px}.CrossUIButton.green:disabled{opacity:0.5;cursor:not-allowed}.CrossUIButton.green:disabled.pill,.CrossUIButton.green:disabled.circle{border-radius:9999px}.CrossUIButton.teal{display:inline-flex;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;border-width:2px;border-color:transparent;line-height:1;font-size:0.875rem;line-height:1.25rem;padding-left:1rem;padding-right:1rem;--bg-opacity:1;background-color:#38b2ac;background-color:rgba(56, 178, 172, var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255, 255, 255, var(--text-opacity));font-weight:600}.CrossUIButton.teal.small,.CrossUIButton.teal.medium,.CrossUIButton.teal.large{font-size:0.75rem;line-height:1rem;padding-left:1rem;padding-right:1rem}.CrossUIButton.teal.small.circle,.CrossUIButton.teal.small.square,.CrossUIButton.teal.medium.circle,.CrossUIButton.teal.medium.square,.CrossUIButton.teal.large.circle,.CrossUIButton.teal.large.square{align-items:center;justify-content:center;padding:0.25rem}.CrossUIButton.teal.small{height:1.5rem;font-size:0.75rem;line-height:1rem}.CrossUIButton.teal.small.circle,.CrossUIButton.teal.small.square{width:1.5rem}.CrossUIButton.teal.medium{height:2rem;font-size:0.875rem;line-height:1.25rem}.CrossUIButton.teal.medium.circle,.CrossUIButton.teal.medium.square{width:2rem}.CrossUIButton.teal.large{height:2.5rem;font-size:1rem;line-height:1.5rem}.CrossUIButton.teal.large.circle,.CrossUIButton.teal.large.square{width:2.5rem}.CrossUIButton.teal.simple{outline:2px solid transparent;outline-offset:2px;--bg-opacity:1;background-color:#38b2ac;background-color:rgba(56, 178, 172, var(--bg-opacity))}.CrossUIButton.teal.simple:hover:not(:disabled){--bg-opacity:1;background-color:#319795;background-color:rgba(49, 151, 149, var(--bg-opacity))}.CrossUIButton.teal.simple:focus{--border-opacity:1;border-color:#2c7a7b;border-color:rgba(44, 122, 123, var(--border-opacity))}.CrossUIButton.teal.simple.pill,.CrossUIButton.teal.simple.circle{border-radius:9999px}.CrossUIButton.teal.outline{outline:2px solid transparent;outline-offset:2px;background-color:transparent;--text-opacity:1;color:#2c7a7b;color:rgba(44, 122, 123, var(--text-opacity));font-weight:600;border-width:1px;--border-opacity:1;border-color:#38b2ac;border-color:rgba(56, 178, 172, var(--border-opacity))}.CrossUIButton.teal.outline:hover:not(:disabled){--bg-opacity:1;background-color:#319795;background-color:rgba(49, 151, 149, var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255, 255, 255, var(--text-opacity));border-color:transparent}.CrossUIButton.teal.outline:focus{--border-opacity:1;border-color:#2c7a7b;border-color:rgba(44, 122, 123, var(--border-opacity))}.CrossUIButton.teal.outline.pill,.CrossUIButton.teal.outline.circle{border-radius:9999px}.CrossUIButton.teal.elevated{outline:2px solid transparent;outline-offset:2px;--bg-opacity:1;background-color:#fff;background-color:rgba(255, 255, 255, var(--bg-opacity));--text-opacity:1;color:#2d3748;color:rgba(45, 55, 72, var(--text-opacity));font-weight:600;border-width:1px;--border-opacity:1;border-color:#cbd5e0;border-color:rgba(203, 213, 224, var(--border-opacity));box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)}.CrossUIButton.teal.elevated:focus:not(:disabled),.CrossUIButton.teal.elevated:hover:not(:disabled){--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247, 250, 252, var(--bg-opacity))}.CrossUIButton.teal.elevated.pill,.CrossUIButton.teal.elevated.circle{border-radius:9999px}.CrossUIButton.teal:disabled{opacity:0.5;cursor:not-allowed}.CrossUIButton.teal:disabled.pill,.CrossUIButton.teal:disabled.circle{border-radius:9999px}.CrossUIButton.indigo{display:inline-flex;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;border-width:2px;border-color:transparent;line-height:1;font-size:0.875rem;line-height:1.25rem;padding-left:1rem;padding-right:1rem;--bg-opacity:1;background-color:#667eea;background-color:rgba(102, 126, 234, var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255, 255, 255, var(--text-opacity));font-weight:600}.CrossUIButton.indigo.small,.CrossUIButton.indigo.medium,.CrossUIButton.indigo.large{font-size:0.75rem;line-height:1rem;padding-left:1rem;padding-right:1rem}.CrossUIButton.indigo.small.circle,.CrossUIButton.indigo.small.square,.CrossUIButton.indigo.medium.circle,.CrossUIButton.indigo.medium.square,.CrossUIButton.indigo.large.circle,.CrossUIButton.indigo.large.square{align-items:center;justify-content:center;padding:0.25rem}.CrossUIButton.indigo.small{height:1.5rem;font-size:0.75rem;line-height:1rem}.CrossUIButton.indigo.small.circle,.CrossUIButton.indigo.small.square{width:1.5rem}.CrossUIButton.indigo.medium{height:2rem;font-size:0.875rem;line-height:1.25rem}.CrossUIButton.indigo.medium.circle,.CrossUIButton.indigo.medium.square{width:2rem}.CrossUIButton.indigo.large{height:2.5rem;font-size:1rem;line-height:1.5rem}.CrossUIButton.indigo.large.circle,.CrossUIButton.indigo.large.square{width:2.5rem}.CrossUIButton.indigo.simple{outline:2px solid transparent;outline-offset:2px;--bg-opacity:1;background-color:#667eea;background-color:rgba(102, 126, 234, var(--bg-opacity))}.CrossUIButton.indigo.simple:hover:not(:disabled){--bg-opacity:1;background-color:#5a67d8;background-color:rgba(90, 103, 216, var(--bg-opacity))}.CrossUIButton.indigo.simple:focus{--border-opacity:1;border-color:#4c51bf;border-color:rgba(76, 81, 191, var(--border-opacity))}.CrossUIButton.indigo.simple.pill,.CrossUIButton.indigo.simple.circle{border-radius:9999px}.CrossUIButton.indigo.outline{outline:2px solid transparent;outline-offset:2px;background-color:transparent;--text-opacity:1;color:#4c51bf;color:rgba(76, 81, 191, var(--text-opacity));font-weight:600;border-width:1px;--border-opacity:1;border-color:#667eea;border-color:rgba(102, 126, 234, var(--border-opacity))}.CrossUIButton.indigo.outline:hover:not(:disabled){--bg-opacity:1;background-color:#5a67d8;background-color:rgba(90, 103, 216, var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255, 255, 255, var(--text-opacity));border-color:transparent}.CrossUIButton.indigo.outline:focus{--border-opacity:1;border-color:#4c51bf;border-color:rgba(76, 81, 191, var(--border-opacity))}.CrossUIButton.indigo.outline.pill,.CrossUIButton.indigo.outline.circle{border-radius:9999px}.CrossUIButton.indigo.elevated{outline:2px solid transparent;outline-offset:2px;--bg-opacity:1;background-color:#fff;background-color:rgba(255, 255, 255, var(--bg-opacity));--text-opacity:1;color:#2d3748;color:rgba(45, 55, 72, var(--text-opacity));font-weight:600;border-width:1px;--border-opacity:1;border-color:#cbd5e0;border-color:rgba(203, 213, 224, var(--border-opacity));box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)}.CrossUIButton.indigo.elevated:focus:not(:disabled),.CrossUIButton.indigo.elevated:hover:not(:disabled){--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247, 250, 252, var(--bg-opacity))}.CrossUIButton.indigo.elevated.pill,.CrossUIButton.indigo.elevated.circle{border-radius:9999px}.CrossUIButton.indigo:disabled{opacity:0.5;cursor:not-allowed}.CrossUIButton.indigo:disabled.pill,.CrossUIButton.indigo:disabled.circle{border-radius:9999px}.CrossUIButton.purple{display:inline-flex;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;border-width:2px;border-color:transparent;line-height:1;font-size:0.875rem;line-height:1.25rem;padding-left:1rem;padding-right:1rem;--bg-opacity:1;background-color:#9f7aea;background-color:rgba(159, 122, 234, var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255, 255, 255, var(--text-opacity));font-weight:600}.CrossUIButton.purple.small,.CrossUIButton.purple.medium,.CrossUIButton.purple.large{font-size:0.75rem;line-height:1rem;padding-left:1rem;padding-right:1rem}.CrossUIButton.purple.small.circle,.CrossUIButton.purple.small.square,.CrossUIButton.purple.medium.circle,.CrossUIButton.purple.medium.square,.CrossUIButton.purple.large.circle,.CrossUIButton.purple.large.square{align-items:center;justify-content:center;padding:0.25rem}.CrossUIButton.purple.small{height:1.5rem;font-size:0.75rem;line-height:1rem}.CrossUIButton.purple.small.circle,.CrossUIButton.purple.small.square{width:1.5rem}.CrossUIButton.purple.medium{height:2rem;font-size:0.875rem;line-height:1.25rem}.CrossUIButton.purple.medium.circle,.CrossUIButton.purple.medium.square{width:2rem}.CrossUIButton.purple.large{height:2.5rem;font-size:1rem;line-height:1.5rem}.CrossUIButton.purple.large.circle,.CrossUIButton.purple.large.square{width:2.5rem}.CrossUIButton.purple.simple{outline:2px solid transparent;outline-offset:2px;--bg-opacity:1;background-color:#9f7aea;background-color:rgba(159, 122, 234, var(--bg-opacity))}.CrossUIButton.purple.simple:hover:not(:disabled){--bg-opacity:1;background-color:#805ad5;background-color:rgba(128, 90, 213, var(--bg-opacity))}.CrossUIButton.purple.simple:focus{--border-opacity:1;border-color:#6b46c1;border-color:rgba(107, 70, 193, var(--border-opacity))}.CrossUIButton.purple.simple.pill,.CrossUIButton.purple.simple.circle{border-radius:9999px}.CrossUIButton.purple.outline{outline:2px solid transparent;outline-offset:2px;background-color:transparent;--text-opacity:1;color:#6b46c1;color:rgba(107, 70, 193, var(--text-opacity));font-weight:600;border-width:1px;--border-opacity:1;border-color:#9f7aea;border-color:rgba(159, 122, 234, var(--border-opacity))}.CrossUIButton.purple.outline:hover:not(:disabled){--bg-opacity:1;background-color:#805ad5;background-color:rgba(128, 90, 213, var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255, 255, 255, var(--text-opacity));border-color:transparent}.CrossUIButton.purple.outline:focus{--border-opacity:1;border-color:#6b46c1;border-color:rgba(107, 70, 193, var(--border-opacity))}.CrossUIButton.purple.outline.pill,.CrossUIButton.purple.outline.circle{border-radius:9999px}.CrossUIButton.purple.elevated{outline:2px solid transparent;outline-offset:2px;--bg-opacity:1;background-color:#fff;background-color:rgba(255, 255, 255, var(--bg-opacity));--text-opacity:1;color:#2d3748;color:rgba(45, 55, 72, var(--text-opacity));font-weight:600;border-width:1px;--border-opacity:1;border-color:#cbd5e0;border-color:rgba(203, 213, 224, var(--border-opacity));box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)}.CrossUIButton.purple.elevated:focus:not(:disabled),.CrossUIButton.purple.elevated:hover:not(:disabled){--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247, 250, 252, var(--bg-opacity))}.CrossUIButton.purple.elevated.pill,.CrossUIButton.purple.elevated.circle{border-radius:9999px}.CrossUIButton.purple:disabled{opacity:0.5;cursor:not-allowed}.CrossUIButton.purple:disabled.pill,.CrossUIButton.purple:disabled.circle{border-radius:9999px}.CrossUIButton.pink{display:inline-flex;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;border-width:2px;border-color:transparent;line-height:1;font-size:0.875rem;line-height:1.25rem;padding-left:1rem;padding-right:1rem;--bg-opacity:1;background-color:#ed64a6;background-color:rgba(237, 100, 166, var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255, 255, 255, var(--text-opacity));font-weight:600}.CrossUIButton.pink.small,.CrossUIButton.pink.medium,.CrossUIButton.pink.large{font-size:0.75rem;line-height:1rem;padding-left:1rem;padding-right:1rem}.CrossUIButton.pink.small.circle,.CrossUIButton.pink.small.square,.CrossUIButton.pink.medium.circle,.CrossUIButton.pink.medium.square,.CrossUIButton.pink.large.circle,.CrossUIButton.pink.large.square{align-items:center;justify-content:center;padding:0.25rem}.CrossUIButton.pink.small{height:1.5rem;font-size:0.75rem;line-height:1rem}.CrossUIButton.pink.small.circle,.CrossUIButton.pink.small.square{width:1.5rem}.CrossUIButton.pink.medium{height:2rem;font-size:0.875rem;line-height:1.25rem}.CrossUIButton.pink.medium.circle,.CrossUIButton.pink.medium.square{width:2rem}.CrossUIButton.pink.large{height:2.5rem;font-size:1rem;line-height:1.5rem}.CrossUIButton.pink.large.circle,.CrossUIButton.pink.large.square{width:2.5rem}.CrossUIButton.pink.simple{outline:2px solid transparent;outline-offset:2px;--bg-opacity:1;background-color:#ed64a6;background-color:rgba(237, 100, 166, var(--bg-opacity))}.CrossUIButton.pink.simple:hover:not(:disabled){--bg-opacity:1;background-color:#d53f8c;background-color:rgba(213, 63, 140, var(--bg-opacity))}.CrossUIButton.pink.simple:focus{--border-opacity:1;border-color:#b83280;border-color:rgba(184, 50, 128, var(--border-opacity))}.CrossUIButton.pink.simple.pill,.CrossUIButton.pink.simple.circle{border-radius:9999px}.CrossUIButton.pink.outline{outline:2px solid transparent;outline-offset:2px;background-color:transparent;--text-opacity:1;color:#b83280;color:rgba(184, 50, 128, var(--text-opacity));font-weight:600;border-width:1px;--border-opacity:1;border-color:#ed64a6;border-color:rgba(237, 100, 166, var(--border-opacity))}.CrossUIButton.pink.outline:hover:not(:disabled){--bg-opacity:1;background-color:#d53f8c;background-color:rgba(213, 63, 140, var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255, 255, 255, var(--text-opacity));border-color:transparent}.CrossUIButton.pink.outline:focus{--border-opacity:1;border-color:#b83280;border-color:rgba(184, 50, 128, var(--border-opacity))}.CrossUIButton.pink.outline.pill,.CrossUIButton.pink.outline.circle{border-radius:9999px}.CrossUIButton.pink.elevated{outline:2px solid transparent;outline-offset:2px;--bg-opacity:1;background-color:#fff;background-color:rgba(255, 255, 255, var(--bg-opacity));--text-opacity:1;color:#2d3748;color:rgba(45, 55, 72, var(--text-opacity));font-weight:600;border-width:1px;--border-opacity:1;border-color:#cbd5e0;border-color:rgba(203, 213, 224, var(--border-opacity));box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)}.CrossUIButton.pink.elevated:focus:not(:disabled),.CrossUIButton.pink.elevated:hover:not(:disabled){--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247, 250, 252, var(--bg-opacity))}.CrossUIButton.pink.elevated.pill,.CrossUIButton.pink.elevated.circle{border-radius:9999px}.CrossUIButton.pink:disabled{opacity:0.5;cursor:not-allowed}.CrossUIButton.pink:disabled.pill,.CrossUIButton.pink:disabled.circle{border-radius:9999px}";

const Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ui = 'simple';
    this.color = 'blue';
    this.size = 'medium';
    this.circle = false;
    this.square = false;
    this.pill = false;
    this.fullWidth = false;
    this.disabled = false;
    this.selected = false;
    this.type = 'button';
  }
  onClickHandler($event) {
    var _a, _b;
    if (this.disabled) {
      $event.stopPropagation();
      return false;
    }
    (_b = (_a = this === null || this === void 0 ? void 0 : this.el) === null || _a === void 0 ? void 0 : _a.onclick) === null || _b === void 0 ? void 0 : _b.call(this, $event);
  }
  render() {
    var _a;
    const extraClasses = (_a = this.el) === null || _a === void 0 ? void 0 : _a.className.split(' ').filter(c => c !== 'hydrated').join(' ');
    const style = [
      'CrossUIButton',
      this.pill ? 'pill' : '',
      this.color,
      this.size,
      this.ui,
      this.circle ? 'circle' : '',
      this.square ? 'square' : '',
      this.fullWidth ? 'w-full' : '',
      extraClasses,
    ].join(' ');
    return (h(Host, null, h("button", { class: style, type: this.type, disabled: this.disabled }, "d", h("slot", null))));
  }
  get el() { return getElement(this); }
};
Button.style = buttonCss;

export { Button as cross_button };
