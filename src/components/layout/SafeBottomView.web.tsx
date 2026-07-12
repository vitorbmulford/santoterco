import { type ViewProps, type ViewStyle, View } from 'react-native';

const safeBottomStyle = {
  bottom: 0,
  flexBasis: 'auto',
  flexGrow: 0,
  flexShrink: 0,
  height: 'auto',
  left: 0,
  marginBottom: 0,
  maxHeight: 'none',
  minHeight: 0,
  paddingBottom: 0,
  position: 'fixed',
  right: 0,
  width: '100%',
  zIndex: 1000,
} as unknown as ViewStyle;

export function SafeBottomView({ style, ...props }: ViewProps) {
  return <View {...props} style={[style, safeBottomStyle]} />;
}
