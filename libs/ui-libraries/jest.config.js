module.exports = {
  name: 'ui-libraries',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-libraries',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
